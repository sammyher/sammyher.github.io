---
layout: page
title: My Memory Allocator
description: my own memory allocator in C
img: assets/img/memlayout.jpg
importance: 1
category: C_programming
---

It seems like every C programmer builds their own memory allocator at some point. It's almost like a rite of passage. I figured it was my turn. I had the opportunity of implementing one while I was tutoring for CSE29. One of the PA's we had to guide students (I think it was [PA3](https://cse29spring2025.github.io/pa3) was a malloc simulator. Since I had never taken the course before, one of my duties was to get familiar with the PA and if I had time, implement it myself. I probably should've but felt strange just filling out #TODO's. I felt like I was cheating. If I was going to build my own memory allocator, it should be 100% my own. I think I'm just stubborn. Anyways I finally built my own, it's not as elaborate but it's mine. 

## Why do we need Malloc? 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/memlayout.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Memory layout of C programs. 
</div>

C has a pretty rigid system for handling memory. To start of, lets focus on the different segments that make up a program's virtual address space.  
1. Text Segment (also known as the code segment)
  a. Contains the instructions for executing the program.  
  b. Read only, so nothing can change the instructions of the program while it's running.
  c. Fixed size and read directly from the executable file on disk.
  d. Stores any literals from the program. 
2. Static memory
  a. Uninitialized (Also know as the BSS segment)
    i. Store uninitialized global and static variables. (i.e. holds values that are not known at compile time)
    ii. Fixed size.
    iii. Read and Write accessible.
  b. Initialized (also known as the data segment)
    i. Holds initialized global and static variables. (i.e. holds values that are known at compile time)
    ii. Read directly from the executable.
    iii. Fixed size
    iiii. Read and Write accessible. 
3. Dynamic memory 
  a. Heap
    i. Used for dynamic memory allocation (i.e. malloc and free)
    ii. Grows and shrinks as needed during runtime, for sizes that can't be determined during compile time.
    iii. Grows upwards (towards higher memory addresses).
  b. Stack
    i. Used for function call management, local variables, and arguments. 
    ii. Grows downwards (towards lower memory addresses).
    iii. Automatically managed by the system (push and pop operations).
    iv. Has a limited size, which can lead to stack overflow if exceeded.
    
We need malloc for variables with unknown compile-time sizes or those requiring a lifecycle that extends beyond the scope of a single function. It's for the situations where we don't know "how much" and "how long" at compile time.
    
## mmap

To get memory for my heap, I decided to use mmap. mmap() is a system call that creates a memory mapping in the virtual address space of the process. 

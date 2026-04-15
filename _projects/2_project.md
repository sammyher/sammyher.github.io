---
layout: page
title: My RSA
description: Textbook RSA implementation in Python
img: assets/img/RSA.jpg
importance: 1
category: python_programming
---

## Intro

We're currently going through the cryptography unit in cse127 and idk RSA seemed kind of cool. Especially the math behind it. I remember being curious as to why keygen produced two keys, one public and one private, and how they were related back in cse15L. But, I never bothered to google it, I just kind of accepted it and moved on. That was a mistake on my part, I would've taken a cryptography class knowing what I know now. Anyways that's neither here nor there, I ended up deciding to implement it myself.

> **Note:** Let me clarify, this is the **textbook implementation** of it. It is insecure and lacks padding. Don't use this. Like at all. Or do. Actually everyone give me your private keys, I'll keep them safe for yall.

You can check out the source code on my [Github](https://github.com/sammyher/RSA.git).

Also, *"We stand today on the brink of a revolution in cryptography"* is probably the most badass way to start a research paper. Shout out to Diffie and Hellman, I taught them well...

## Keygen

We generate a key pair (**private** and **public**) for everyone. The idea is that you share your public key with the world, but keep your private key secret. When someone wants to send you a message, they encrypt it using your **public key**, and only you can decrypt it using your **private key**.

### High Level Example

Let's look at an example, we have Alice and Bob. They each have their own public and private key. If Alice wants to send a message to Bob, she encrypts the message with the public key of Bob. The keys are constructed in such a way that when Bob receives the cipher text, he can use his private key to decrypt it and retrieve the original message.

| Person | Public Key | Private Key |
| :--- | :--- | :--- |
| **Alice** | $A_{pub}$ | $A_{priv}$ |
| **Bob** | $B_{pub}$ | $B_{priv}$ |

**The Flow:**

1. Alice takes the message $m$.
2. Alice computes: $E(B_{pub}, m) = c$ (Ciphertext).
3. Alice sends $c$ to Bob.
4. Bob computes: $D(B_{priv}, c) = m$.

---

## The math behind it

In order to achieve asymmetric encryption, we need to find a way to generate two keys that are mathematically related but not easily derivable from one another. This is where the concept of prime factorization comes into play. The security of RSA relies on the fact that while it is easy to multiply two large prime numbers together, it is extremely difficult to factor the resulting product back into its original prime factors.

### 1. Pick your Primes

We start of with two large prime numbers, $p$ and $q$. For the sake of simplicity, let's use small primes for this example:
$$p = 11, \quad q = 13$$

### 2. Calculate the Modulus ($n$)

We want to get the product of p and q in order to get the modulus for both the public and private keys.
$$n = p \times q = 11 \times 13 = 143$$

### 3. Calculate Euler's Totient ($\phi(n)$)

We then calculate Euler's totient function, which basically counts how many numbers are coprime to $n$ that are smaller than $n$. We could list all the numbers that are less than $143$ and count how many of them are coprime to $143$, but that would be tedious. But the $\phi$ of a prime number, which again is only divisible by itself and one, is going to be every number below it. Therefore, $\phi(x) = x - 1$ if $x$ is a prime number. However, $n$ isn't prime. $n$ is the product of two prime numbers, meaning it's divisible by $p$ and $q$. Instead, what we could do is take the $\phi$ of $p$ and $q$ individually.

$$\begin{aligned}
\phi(n) &= \phi(p \cdot q) \\

&= \phi(p) \cdot \phi(q) \\

&= (p - 1)(q - 1) \\

&= 10 \cdot 12 \\

&= 120
\end{aligned}$$

> A number is a coprime of another number if their greatest common divisor is 1. For example, 8 and 15 are coprime because their greatest common divisor is 1, while 12 and 15 are not coprime because their greatest common divisor is 3.

### 4. Choose Public Exponent ($e$)

Now we want to look for $e$ that satisfies the following condition:

$$2 < e < \phi(n) \quad \text{and} \quad \gcd(e, \phi(n)) = 1$$

We can just pick 7, since it's a prime number and it's less than 120, we just need to check if it's coprime to 120. The greatest common divisor of 7 and 120 is 1, so they are coprime. 7 is now our public exponent with the **Public Key: $(7, 143)$**. Now we need our corresponding **Private key**.

### 5. Calculate Private Exponent ($d$)

To find our private key we need to find $d$ such that:

$$e \cdot d \equiv 1 \pmod{\phi(n)}$$

In other words, we need to find a number $d$ such that when we multiply it by $7$ and divide by $120$, the remainder is $1$. Following our example, we are looking for:

$$7 \cdot d \equiv 1 \pmod{120}$$

For very large numbers (actual implementation), we would use the Extended Euclidean Algorithm to find $d$, but since our example numbers are small we can just solve it. In our case, $d$ comes down to be $103$, since $7 \cdot 103 = 721$, and when we divide $721$ by $120$, the remainder is $1$. So our private exponent is $103$ with the **Private Key: $(103, 143)$**.

>Just a quick side note on why RSA encryption is secure. It is basically impossible (if using large numbers) to find what $d$ is without knowing what $\phi(n)$ is. To get $\phi(n)$, you need $p$ and $q$. It is comically difficult to figure out what $p$ and $q$ are from just $n$. As of this time, there is no known efficient algorithm that allows us to find $p$ and $q$ from $n$.

### Encrypting and Decrypting

Going back to $e \cdot d \equiv 1 \pmod{\phi(n)}$, we wanted $d$ to be the modular multiplicative inverse of $e$. Because $d$ and $e$ are linked this way through $\phi(n)$, raising a number to the power of $e$ and then raising the result to the power of $d$ (all modulo $n$) effectively "undoes" the transformation, bringing you back to the original value.

Let's say Alice generated these key set, n = 143, e = 7 and d = 103. She wants to send a message m to Bob. We will say that m is 15. But we have Eve who sits in between Alice and Bob and we don't want her to be able to read the message. So what Alice does is encrypt that message using Bob's public key $(e, n)$:

$$\begin{aligned}
c &= m^e \pmod{n} \\
&= 15^7 \pmod{143} \\
&= 115
\end{aligned}$$

Alice sends the value 115 over the wire. Even if Eve sees 115, she can't easily turn it back into 15 without the private key $d$. When Bob receives the cipher text, he uses his private key to decrypt it:

$$\begin{aligned}
m &= c^d \pmod{n} \\
&= 115^{103} \pmod{143} \\
&= 15
\end{aligned}$$

## Summary of Formulas

| Step | Formula |
| :--- | :--- |
| **Modulus** | $n = p \times q$ |
| **Totient** | $\phi(n) = (p-1)(q-1)$ |
| **Public Key** | $2 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$ |
| **Private Key** | $d \equiv e^{-1} \pmod{\phi(n)}$ |
| **Encryption** | $c = m^e \pmod n$ |
| **Decryption** | $m = c^d \pmod n$ |

"use client"; // This tells Next.js that this is a client-side component.

import { useEffect } from 'react';
import './globals.css'; // Assuming your styles are in this CSS file

export default function Home() {
  useEffect(() => {
    // DOM Manipulation with event listeners
    const signButton = document.querySelector('.sign-button') as HTMLElement | null;
    const closeBtn = document.getElementById('closeBtn') as HTMLElement | null;
    const signUp = document.querySelector('.sign-up') as HTMLElement | null;
    const signIn = document.querySelector('.sign-in') as HTMLElement | null;

    if (signButton) {
      signButton.addEventListener('click', () => {
        const nav = document.querySelector('nav') as HTMLElement | null;
        const about = document.querySelector('.about') as HTMLElement | null;
        const popup = document.querySelector('.popup') as HTMLElement | null;

        if (nav && about && popup) {
          nav.style.filter = 'blur(5px)';
          about.style.filter = 'blur(5px)';
          popup.style.display = 'block';
          document.body.classList.add('freeze');
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        const nav = document.querySelector('nav') as HTMLElement | null;
        const about = document.querySelector('.about') as HTMLElement | null;
        const popup = document.querySelector('.popup') as HTMLElement | null;

        if (popup && nav && about) {
          popup.style.display = 'none';
          nav.style.filter = 'blur(0px)';
          about.style.filter = 'blur(0px)';
          document.body.classList.remove('freeze');
        }
      });
    }

    let firstTime = false;

    if (signUp) {
      signUp.addEventListener('click', () => {
        if (!firstTime) {
          firstTime = true;
          signUp.style.backgroundColor = 'var(--white-color)';
          signUp.style.color = 'var(--prime-dark-color)';
          signUp.style.cursor = 'default';

          if (signIn) {
            signIn.style.backgroundColor = 'var(--prime-color)';
            signIn.style.color = 'var(--white-color)';
            signIn.style.cursor = 'pointer';
          }

          const log1 = document.querySelector('.log1') as HTMLElement | null;
          const log2 = document.querySelector('.log2') as HTMLElement | null;

          if (log1 && log2) {
            log1.style.display = 'none';
            log2.style.display = 'flex';
          }
        }
      });
    }

    if (signIn) {
      signIn.addEventListener('click', () => {
        if (firstTime) {
          firstTime = false;
          signIn.style.backgroundColor = 'var(--white-color)';
          signIn.style.color = 'var(--prime-dark-color)';
          signIn.style.cursor = 'default';

          if (signUp) {
            signUp.style.backgroundColor = 'var(--prime-color)';
            signUp.style.color = 'var(--white-color)';
            signUp.style.cursor = 'pointer';
          }

          const log1 = document.querySelector('.log1') as HTMLElement | null;
          const log2 = document.querySelector('.log2') as HTMLElement | null;

          if (log1 && log2) {
            log1.style.display = 'flex';
            log2.style.display = 'none';
          }
        }
      });
    }
  }, []);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/Logo.png" alt="KeyFights Logo" />
          <a href="#">KeyFights</a>
        </div>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
          <li><a href="#">Option 4</a></li>
        </ul>
        <button className="sign-button">
          Sign in - Sign up
        </button>
      </nav>

      <div className="about">
        <div className="shape1">
          <img src="/images/line-1.png" alt="Shape 1" />
        </div>
        <div className="shape2">
          <img src="/images/line-2.png" alt="Shape 2" />
        </div>

        <div className="content">
          <h2>Welcome,</h2>
          <h1>I am KeyFights.</h1>
          <p>
            Unleash your typing speed and precision—compete against friends or race against the clock.
            Ready to type your way to victory? Start your engines and let’s see who’s the fastest typist!
          </p>
          <a href="./rand-race">
            <button className="play-now-button">PLAY NOW</button>
          </a>
        </div>

        <div className="image">
          <img src="/images/Main Image.png" alt="Main Image" />
        </div>
      </div>

      <div className="popup" style={{ display: 'none' }}>
        <span className="close-btn" id="closeBtn">&times;</span>

        <div className="sign">
          <div className="tab">
            <button className="sign-in">Sign in</button>
            <button className="sign-up">Sign up</button>
          </div>

          <form className="log1">
            <div className="login">Login to your account</div>
            <label className="email-label">Email:</label>
            <input type="text" id="email-input" placeholder="YourName@example.com" />
            <label className="password-label">Password:</label>
            <input type="password" id="password-input" placeholder="Minimum 6 characters" />
            <button className="submit">Submit</button>
          </form>

          <form className="log2" style={{ display: 'none' }}>
            <div className="login">Create your account</div>
            <div className="names">
              <div className="eachname">
                <label className="first-label">First Name:</label>
                <input type="text" id="first" placeholder="First" />
              </div>
              <div className="eachname">
                <label className="last-label">Last Name:</label>
                <input type="text" id="last" placeholder="Last" />
              </div>
            </div>
            <label className="email-label">Email:</label>
            <input type="text" id="email-input" placeholder="YourName@example.com" />
            <label className="password-label">Password:</label>
            <input type="password" id="password-input" placeholder="Minimum 6 characters" />
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

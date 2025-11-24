/**
 * @fileoverview Main entry point for the Vite/JavaScript application.
 * It initializes the UI, sets up the counter functionality, and fetches
 * data from an external API specified via a Vite environment variable.
 * * @author [Anne-Zwift]
 * @version 1.0.0
 * @since 2025-11-24
 */

import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

/**
 * @constant {string|undefined} API_URL
 * Vite environment variable holding the base URL for the external API.
 * Accessed via `import.meta.env.VITE_API_URL`. This variable must be
 * defined in a `.env` file for API fetching to proceed.
 */

const API_URL = import.meta.env.VITE_API_URL;

/**
 * @async
 * @function fetchDataAndRender
 * @description
 * Primary application function. It performs the following steps:
 * 1. Locates the main application element (`#app`).
 * 2. Renders the initial application HTML structure (logos, title, counter button).
 * 3. Initializes the counter using `setupCounter()`.
 * 4. Checks if `API_URL` is defined.
 * 5. If `API_URL` is defined, it attempts to fetch JSON data from the URL.
 * 6. Displays the first 5 fetched posts on the page or displays an error message
 * if the fetch fails or the API URL is missing.
 *
 * @returns {Promise<void>} A promise that resolves when the UI is rendered and
 * data fetching/display is complete (or error handled).
 */

async function fetchDataAndRender() {
  const appElement = document.querySelector('#app');

  if (!appElement) return;

  appElement.innerHTML = `
    <div class="main-container"> 
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <h1>Vite + .env </h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p>Fetching data from: <code>${API_URL || 'NOT DEFINED'}</code></p>
        
        <!-- API Res-->
        <div id="api-result" style="margin-top: 1rem; padding: 1rem; border-radius: 0.5rem; background-color: #f3f4f6; text-align: left;">
          <p style="font-weight: 600;">Loading API data...</p>
        </div>
        
        <p class="read-the-docs">
          Click on the Vite logo to learn more
        </p>
      </div>
    </div>
  `;

  setupCounter(document.querySelector('#counter'));

  const resultElement = document.getElementById('api-result');

  if (API_URL) {
    console.log(`Attempting to fetch data from: ${API_URL}`);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Network response was not OK: ${response.status}`);
      }

      const data = await response.json();

      console.log('--- API Data Fetched ---');
      console.log('API URL:', API_URL);
      console.log('API returned:', data);
      console.log('-------------------------');

      const postsToShow = data.slice(0, 5);

      let postsHtml = postsToShow
        .map(
          (post) => `
        <li style="margin-bottom: 0.5rem; border-left: 3px solid #10b981; padding-left: 0.5rem; padding-right: 0.5rem">
          <strong style="font-size: 0.9em;">ID ${post.id}:</strong> ${post.title}
        </li>
      `
        )
        .join('');

      resultElement.innerHTML = `
        <p style="font-weight: 600; color: #10b981;">API Success! (${data.length} in total).</p>
        
        <h3 style="font-size: 1.1em; margin-top: 1rem; border-bottom: 1px solid #ddd; padding-bottom: 0.25rem;">
          The first 5 posts:
        </h3>
        
        <ul style="list-style-type: none; padding: 0; margin-top: 0.75rem;">
          ${postsHtml}
        </ul>
        
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem;">
          (Check console (F12) to see data-array.)
        </p>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
      resultElement.innerHTML = `
        <p style="font-weight: 600; color: #ef4444;">Error fetching data:</p>
        <p style="color: #ef4444;">${error.message}</p>
      `;
    }
  } else {
    resultElement.innerHTML = `
      <p style="font-weight: 600; color: #f97316;">Error: VITE_API_URL is NOT defined.</p>
      <p style="font-size: 0.875rem; color: #f97316;">Check if .env is in root, restart server.</p>
    `;
  }
}

fetchDataAndRender();

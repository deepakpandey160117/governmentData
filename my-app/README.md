# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Indian Government Schemes & CGTMSE Data Viewer

This project is a React.js web application that displays state/UT-wise data for the number and amount of guarantees approved under CGTMSE from 2019-20 to 2022-23. The data is fetched live from the official [data.gov.in API](https://data.gov.in/).

## Features
- **List of Schemes:** View all states/UTs with their CGTMSE guarantee data for each financial year.
- **Search by State/UT:** Instantly filter results by typing a state or UT name.
- **Modern UI:** Visually appealing, responsive card layout for easy browsing.
- **Live Data:** Uses a free, official government API (no authentication required for demo key).

## Tech Stack
- React.js (Vite)
- HTML, CSS (custom styling)
- Fetch API for data integration

## How to Run Locally
1. **Clone the repository:**
	```sh
	git clone https://github.com/deepakpandey160117/governmentData.git
	cd governmentData/my-app
	```
2. **Install dependencies:**
	```sh
	npm install
	```
3. **Start the development server:**
	```sh
	npm run dev
	```
4. **Open in browser:**
	Visit [http://localhost:5173](http://localhost:5173) (or as shown in your terminal)

## API Reference
- **Source:** [data.gov.in CGTMSE Guarantees API](https://api.data.gov.in/resource/ac84de6a-6cbf-44fb-aef0-dce70f7ae1f9?api-key=579b464db66ec23bdd0000017ede31da2c8c48fe6507bfe71f7f0ca3&format=json&offset=0&limit=1000)
- **Fields Used:**
  - `states_uts`: State/UT name
  - `fy_19_20_for_number`, `fy_19_20_for_amount`
  - `fy_20_21_for_number`, `fy_20_21_for_amount`
  - `fy_21_22_for_number`, `fy_21_22_for_amount`
  - `fy_22_23_till_28_02_2023_number`, `fy_22_23_till_28_02_2023_amount`

## Customization
- You can update the API key or endpoint in `src/GovtScene.jsx` for more data or different datasets.
- UI can be further customized in `src/GovtScene.css`.

## Deployment
- Deploy easily to Netlify, Vercel, or GitHub Pages for a live demo.

## License
This project is for educational/demo purposes. Data is sourced from the Indian government open data portal.

---

**Made with ❤️ using React and open government data.**

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express CI/CD App Jenkins</title>

            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: Arial, sans-serif;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #0f172a, #1e293b);
                    color: white;
                }

                .container {
                    width: 90%;
                    max-width: 750px;
                    padding: 45px;
                    text-align: center;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 24px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
                    backdrop-filter: blur(12px);
                }

                .status {
                    display: inline-block;
                    padding: 8px 16px;
                    margin-bottom: 25px;
                    border-radius: 30px;
                    background: #16a34a;
                    font-size: 14px;
                    font-weight: bold;
                }

                h1 {
                    font-size: 42px;
                    margin-bottom: 15px;
                }

                .highlight {
                    color: #38bdf8;
                }

                p {
                    color: #cbd5e1;
                    font-size: 18px;
                    line-height: 1.6;
                    margin-bottom: 30px;
                }

                .cards {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 15px;
                    margin-top: 25px;
                }

                .card {
                    padding: 20px;
                    background: rgba(255, 255, 255, 0.07);
                    border-radius: 15px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .card h3 {
                    margin-bottom: 8px;
                    color: #38bdf8;
                }

                .card span {
                    color: #cbd5e1;
                    font-size: 14px;
                }

                .footer {
                    margin-top: 30px;
                    color: #94a3b8;
                    font-size: 14px;
                }

                @media (max-width: 600px) {
                    .container {
                        padding: 30px 20px;
                    }

                    h1 {
                        font-size: 32px;
                    }

                    .cards {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>

        <body>

            <div class="container">

                <div class="status">
                    ● SERVER ONLINE
                </div>

                <h1>
                    Hello from <span class="highlight">Express.js</span> 🚀
                </h1>

                <p>
                    This application is running through a complete
                    DevOps pipeline using Docker, Jenkins and Kubernetes Ingress.
                </p>

                <div class="cards">

                    <div class="card">
                        <h3>🐳 Docker</h3>
                        <span>Containerized Application</span>
                    </div>

                    <div class="card">
                        <h3>⚙️ Jenkins</h3>
                        <span>Automated CI/CD Pipeline</span>
                    </div>

                    <div class="card">
                        <h3>☸️ Ingress</h3>
                        <span>Kubernetes Traffic Routing</span>
                    </div>

                </div>

                <div class="footer">
                    Port: 3333 • Deployment Successful 🎉
                </div>

            </div>

        </body>
        </html>
    `);
});

app.listen(3333, () => {
    console.log('🚀 Server is running on port 3333! Congrats!');
});

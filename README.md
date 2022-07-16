# Deplying Express app to Heroku

# Setup and installation

- Register an account on Heroku here.

- Install Heroku CLI

```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

- Login to Heroku on CLI

```bash
heroku login
```

# Set `engines` prop in `package.json`

```json
{
    .
    .
    .
    "engines": {
        "node": "16.4.2"
    }
}
```

# Create Procfile

To determine how to start your app, Heroku first looks for a `Procfile`.

# Link repo to Heroku app

```bash
# heroku git:remote -a <app-name>
heroku git:remote -a durian-orange-v1
```

# Deploy to Herokuapp

```bash
git push heroku main
```
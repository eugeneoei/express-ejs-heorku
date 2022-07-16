# Deplying Express app to Heroku

# Install Heroku CLI

```bash
curl https://cli-assets.heroku.com/install.sh | sh
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
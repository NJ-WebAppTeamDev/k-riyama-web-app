from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")
    db.init_app(app)

    from app import models

    # Flask-RESTfulのAPI初期化
    with app.app_context():
        from app.resources import api_bp

        app.register_blueprint(api_bp, url_prefix="/api/v1")

        db.create_all()

    return app

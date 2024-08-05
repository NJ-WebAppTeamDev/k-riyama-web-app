import logging
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    logging.basicConfig(level=logging.DEBUG)
    CORS(
        app,
        resources={
            r"/*": {"origins": ["http://localhost:3000", "http://localhost:8080"]}
        },
    )
    app.config.from_object("config.Config")
    db.init_app(app)

    from app import models

    # Flask-RESTfulのAPI初期化
    with app.app_context():
        from app.resources import api_bp
        from app.resources.admin import admin_api_bp

        app.register_blueprint(api_bp, url_prefix="/api/v1")
        app.register_blueprint(admin_api_bp, url_prefix="/api/v1/admin")

        db.create_all()

    return app

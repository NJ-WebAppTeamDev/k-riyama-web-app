from pathlib import Path

from app import db
from app.models import BlogImage
from flask_restful import Resource, request
from flask import jsonify, make_response


class ImageFileUploadResource(Resource):

    def post(self):
        if "file" not in request.files:
            return make_response(jsonify({"error": "file is required."}))

        file = request.files["file"]
        filename = file.filename
        blog_id = request.form["blog_id"]

        if filename == "":
            return make_response(jsonify({"error": "filename must not empty."}))

        path = Path(f"./uploads/{request.form['filename']}.{filename.split('.')[-1]}")
        if not path.parent.exists():
            path.parent.mkdir(exist_ok=True)
        file.save(path)

        image = BlogImage(blog_id=blog_id, image_url=str(path))

        db.session.add(image)
        db.session.commit()

        return make_response(jsonify({"response": "OK"}))

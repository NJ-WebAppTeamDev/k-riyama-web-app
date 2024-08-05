from flask_restful import Resource
from flask import request
from .validate import AdminBlogDataForm
import logging
from app.models import Blog, StudentVoice
from app import db


class AdminBlogListResource(Resource):
    def post(self):
        data = request.get_json()
        form = AdminBlogDataForm(data=data)
        if form.validate():
            blog = Blog(
                nick_name=data["nick_name"],
                place_name=data["place_name"],
                points=data.get("points"),
                more_description=data.get("more_description"),
                address=data.get("address"),
                meta_description=data.get("meta_description"),
                meta_og_description=data.get("meta_og_description"),
                meta_keywords=data.get("meta_keywords"),
            )

            if "student_voices" in data:
                for voice in data["student_voices"]:
                    blog.student_voices.append(
                        StudentVoice(
                            academic_year=voice["academic_year"],
                            description=voice["description"],
                        )
                    )
                    db.session.add(blog)

            db.session.add(blog)
            db.session.commit()

            return {"message": "created"}, 201
        else:
            return {"errors": form.errors}, 400

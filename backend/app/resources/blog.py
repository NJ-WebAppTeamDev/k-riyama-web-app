from app.models import Blog
from flask_restful import Resource
from flask import jsonify
from sqlalchemy.orm import joinedload


def blog_to_dict(blog):
    blog_dict = {
        "id": blog.id,
        "nick_name": blog.nick_name,
        "place_name": blog.place_name,
        "points": blog.points,
        "more_description": blog.more_description,
        "address": blog.address,
        "meta_description": blog.meta_description,
        "meta_og_description": blog.meta_og_description,
        "meta_keywords": blog.meta_keywords,
        "images": [image.image_url for image in blog.images],
        "student_voices": [
            {
                "id": voice.id,
                "academic_year": voice.academic_year,
                "description": voice.description,
            }
            for voice in blog.student_voices
        ],
    }
    return blog_dict


class BlogListResource(Resource):
    def get(self):
        blogs = Blog.query.options(
            joinedload(Blog.images), joinedload(Blog.student_voices)
        ).all()

        blog_list = list(map(blog_to_dict, blogs))

        return {"blogs": blog_list}, 200

from app.models import Blog
from flask_restful import Resource
from flask import jsonify
from sqlalchemy.orm import joinedload


def blog_to_dict(blog):
    blog_dict = {
        "id": blog.id,
        "nick_name": blog.nick_name,
    }
    return blog_dict


class StampboardResource(Resource):
    def get(self):
        blogs = Blog.query.all()

        blog_list = list(map(blog_to_dict, blogs))

        return {"stampboard": blog_list}, 200

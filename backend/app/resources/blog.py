from app.models import Blog
from flask_restful import Resource
from flask import jsonify


class BlogListResource(Resource):
    def get(self):
        blogs = Blog.query.all()
        blog_list = []

        for blog in blogs:
            blog_list.append(
                {
                    "id": blog.id,
                    "nick_name": blog.nick_name,
                    "place_name": blog.place_name,
                    "points": blog.points,
                    "more_description": blog.more_description,
                    "address": blog.address,
                    "meta_description": blog.meta_description,
                    "meta_og_description": blog.meta_og_description,
                    "meta_keywords": blog.meta_keywords,
                }
            )

        return jsonify({"blogs": blog_list})

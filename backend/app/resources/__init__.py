from flask import Blueprint
from flask_restful import Api
from app.resources.blog import BlogListResource, BlogDetailResource

api_bp = Blueprint("api", __name__)
api = Api(api_bp)

# エンドポイントの登録
api.add_resource(BlogListResource, "/blogs")
api.add_resource(BlogDetailResource, "/blogs/<int:blog_id>")

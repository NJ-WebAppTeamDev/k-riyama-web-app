from flask import Blueprint
from flask_restful import Api
from app.resources.admin import upload
from .admin_blog import AdminBlogListResource

admin_api_bp = Blueprint("admin_api", __name__)
admin_api = Api(admin_api_bp)

# エンドポイントの登録
admin_api.add_resource(upload.ImageFileUploadResource, "/upload/image")
admin_api.add_resource(AdminBlogListResource, "/blogs")

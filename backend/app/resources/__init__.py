from flask import Blueprint
from flask_restful import Api
from app.resources.sample import SampleResource, SampleListResource

api_bp = Blueprint("api", __name__)
api = Api(api_bp)

# エンドポイントの登録
api.add_resource(SampleResource, "/sample")
api.add_resource(SampleListResource, "/sample/<int:sample_id>")

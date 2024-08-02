# TODO 後に削除するファイルです。サンプル用に作成しました。このファイルは編集しないでください。
from flask_restful import Resource, reqparse


class SampleResource(Resource):
    def get(self):
        return {"message": "Hello, World!"}


class SampleListResource(Resource):
    def get(self, sample_id):
        sample = {"id": sample_id, "name": "sample"}
        return sample

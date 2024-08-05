from flask_restful import Resource
from flask import request
from .validate import AdminBlogDataForm


class AdminBlogListResource(Resource):
    def post(self):
        data = request.get_json()
        form = AdminBlogDataForm(data=data)
        if form.validate():
            return {"message": "Validation passed!"}, 200
        else:
            return {"errors": form.errors}, 400

# TODO サンプルテストです。後に削除するので参照用として編集はしないでください。
import unittest
from app import create_app, db


class SampleTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config["TESTING"] = True
        self.app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///:memory:"
        self.client = self.app.test_client()

        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_get_sample(self):
        response = self.client.get("/api/v1/sample")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, {"message": "Hello, World!"})

    def test_get_sample_list(self):
        response = self.client.get("/api/v1/sample/1")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, {"id": 1, "name": "sample"})


if __name__ == "__main__":
    unittest.main()

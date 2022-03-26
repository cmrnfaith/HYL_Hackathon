from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, name, username, active=True):
        super().__init__()
        self.name = name
        self.id = username
        self.active = active
        self.authenticated = True

    def is_active(self):
        # Here you should write whatever the code is
        # that checks the database if your user is active
        return self.active

    def is_anonymous(self):
        return False

    def is_authenticated(self):
        return self.authenticated
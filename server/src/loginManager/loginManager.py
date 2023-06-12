from flask_login import LoginManager

def login_required(role="PACIENTE"):
    def wrapper(fn):
        @wraps(fn)
        def decorated_view(*args, **kwargs):

            if not current_user.is_authenticated():
               return current_app.login_manager.unauthorized()
            urole = current_app.login_manager.reload_user().get_urole()
            if ( (urole != role) and (role != "PACIENTE")):
                return current_app.login_manager.unauthorized()      
            return fn(*args, **kwargs)
        return decorated_view
    return wrapper
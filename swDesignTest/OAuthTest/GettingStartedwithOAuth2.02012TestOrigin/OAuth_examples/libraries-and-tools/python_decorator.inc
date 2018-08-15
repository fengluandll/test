from oauth2client.appengine import OAuth2Decorator

...

decorator = OAuth2Decorator(
    client_id='CLIENT_ID_FROM_DAILYMOTION',
    client_secret='CLIENT_SECRET_FROM_DAILYMOTION',
    scope='read',
    auth_uri='https://api.dailymotion.com/oauth/authorize',
    token_uri='https://api.dailymotion.com/oauth/token'
    )

class MainHandler(webapp.RequestHandler):

  @decorator.oauth_required
  def get(self):

    http = decorator.http()
    resp, content = http.request('https://api.dailymotion.com/me')

    path = os.path.join(os.path.dirname(__file__), 'welcome.html')
    logout = users.create_logout_url('/')
    variables = {
        'content': content,
        'logout': logout
        }
    self.response.out.write(template.render(path, variables))

...

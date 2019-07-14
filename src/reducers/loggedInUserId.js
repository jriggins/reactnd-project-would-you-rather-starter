export default function(previousState = null, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user.id;
    case 'LOGOUT_USER':
      return null;
    default:
      return previousState;
  }
}

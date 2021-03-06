import configureStore     from "./configure_store";
import Immutable          from 'immutable';

describe('configure store', function() {

  it('setups up initial state', function() {
    const settings = {
      csrf     : "csrf_token",
      apiUrl   : "http://www.example.com"
    };
    const initialState = {
      jwt      : "jwt_token",
      settings : settings
    };
    const store = configureStore(initialState);
    expect(store.getState().settings).toBe(settings);
    expect(store.getState().jwt).toBe('jwt_token');
  });
});
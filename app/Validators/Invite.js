'use strict'

class Invite {
  get rules () {
    return {
      invites: 'required|array',
      'invites.*': 'required|email',
    }
  }
}

module.exports = Invite

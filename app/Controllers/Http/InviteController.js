'use strict'

const Invite = use('App/Models/Invite')

class InviteController {
  async store ({ request, auth }) {
    const invites = request.input('invites')

    const data = invites.map(email => ({
      email,
      user_id: auth.user.id,
      team_id: auth.user.currentTeam,
    }))

    await Invite.createMany(data)
  }
}

module.exports = InviteController

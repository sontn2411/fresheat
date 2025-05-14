const ADMINROOT = '/admin'
const SETTINGSROOT = `${ADMINROOT}/settings`

const ROUTES = {
  ADMIN: ADMINROOT,
  SETTINGS: {
    ROOT: SETTINGSROOT,
    HOME: {
      ROOT: `${SETTINGSROOT}/home`,
      BANNER: `${SETTINGSROOT}/home/banner`,
      BESTFOOD: `${SETTINGSROOT}/home/bestfood`,
      OBOUTUS: `${SETTINGSROOT}/home/aboutUs`,
    },
  },
}

export default ROUTES

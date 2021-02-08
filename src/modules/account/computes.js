export function workCenter (value) {
  var response = 'NONE'
  if (!value) { return response }

  if (value === 'SYS') {
    response = 'SYSTEM TEAM'
  } else if (value === 'GIS') {
    response = 'GIS TEAM'
  } else if (value === 'ADMIN') {
    response = 'ADMIN TEAM'
  } else if (value === 'DB') {
    response = 'DB TEAM'
  } else if (value === 'LV') {
    response = 'LV TEAM'
  }

  return response
}

export function fullName (user) {
  return `${user?.first_name} ${user?.last_name}`
}

export function isOnline (user) {
  return !!(user?.first_name)
}

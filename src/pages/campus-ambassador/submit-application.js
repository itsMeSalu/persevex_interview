export async function submitAmbassadorApplication(form) {
  const body = Object.entries(form).map(([key, value]) => key + ': ' + value).join('\n')
  window.location.href = 'mailto:support@antintern.com?subject=Campus%20Ambassador%20Application&body=' + encodeURIComponent(body)
}

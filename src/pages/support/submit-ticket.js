export async function submitSupportTicket(ticket) {
  const body = Object.entries(ticket).map(([key, value]) => key + ': ' + value).join('\n')
  window.location.href = 'mailto:support@antintern.com?subject=' + encodeURIComponent(ticket.subject) + '&body=' + encodeURIComponent(body)
}

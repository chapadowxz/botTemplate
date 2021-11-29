module.exports = {
    name: 'ready',
    execute(client) {

      let activities = [
        `Mensagem #1`,
        `Mensagem #2`,

],
    i = 0;
    setInterval(
    () =>
        client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "PLAYING",
        }),
        1000 * 60
    );
  }
}
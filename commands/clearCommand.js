const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Remova até 99 mensagens.')
		.addIntegerOption(option => option.setName('amount').setDescription('Número de mensagens para limpar')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		if (amount <= 1 || amount > 100) {
			return interaction.reply({ content: 'Você precisa inserir um número entre 1 e 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Ocorreu um erro ao tentar remover mensagens neste canal!', ephemeral: true });
		});

		return interaction.reply({ content: `Apagado com sucesso \`${amount}\` mensagens.`, ephemeral: true });
	},
};
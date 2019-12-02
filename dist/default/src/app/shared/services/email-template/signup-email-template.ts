export let SignupEmailTemplate = `
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
</style>
<style>
	table{
		font-family: "Poppins";
		margin: auto;
		border-collapse:collapse;
		width: 70%
	}
	thead {
		background-color: #2f7e78;
		color: #fff;
		font-size: 16px;
		font-weight: normal !important;
	}
	thead>tr>th{
		padding: 15px;
		font-weight: normal;
	}
	tbody>tr>td{
		color: #646c9a;
		font-size: 13px;
	}
</style>
<div style="width: 100%;text-align: center">
	<table>
		<thead>
		<tr>
			<th>[cabecalho]</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td>
				<div style="text-align: left">
					[body]
				</div>
			</td>
		</tr>
		</tbody>
		<tfoot>
		<tr>
			<td>[footer]</td>
		</tr>
		</tfoot>
	</table>
</div>
`;

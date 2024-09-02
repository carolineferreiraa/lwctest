import { LightningElement } from 'lwc';
import { COLUMNS, testData } from './sampleData';

export default class CustomTreeGrid extends LightningElement {
	columns = COLUMNS;

	gridData = testData;

	selectAllCheckbox;

	connectedCallback() {
		let records = [...this.gridData];
		this.gridData = [...records];
	}

	handleExpandCollapse(event) {
		const index = this.gridData.findIndex((item) => item.id === event.target.dataset.recordId);
		let records = [...this.gridData];
		records[index] = { ...records[index], ariaExpanded: !records[index].ariaExpanded };

		this.gridData = [...records];
	}

}
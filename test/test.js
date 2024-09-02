import { LightningElement, track } from 'lwc';
import {
    EXAMPLES_COLUMNS_DEFINITION_BASIC
   // EXAMPLES_DATA_BASIC,
   // COLUMNS_DEFINITION_NONWHITELIST
} from './sampleData';

const DATA_BASIC = [
    {
        name: '125313-7j',
        type: 'Dach-Welch',
        phone: '837-555-0100',
        _children:[]
    },
    {
        name: '584996-s7',
        type: 'Corkery-Windler',
        phone: '837-555-0100',
        _children: [
            {
                name: '747773-jw',
                type: 'Corkery-Abshire',
                phone: '837-555-0100',
            },
            {
                name: '377526-zg',
                type: 'Robel, Friesen and Flatley',
                phone: '837-555-0100',
                _children: [
                    {
                        name: '955330-wp',
                        type: 'Donnelly Group',
                        phone: '837-555-0100',
                    },
                    {
                        name: '343693-9x',
                        type: 'Kshlerin Group',
                        phone: '837-555-0100',
                    },
                ],
            },
            {
                name: '638483-y2',
                type: 'Bruen, Steuber and Spencer',
                phone: '837-555-0100',
            },
        ]
    }
]

export default class Test extends LightningElement {

    // definition of columns for the tree grid
    gridColumns = EXAMPLES_COLUMNS_DEFINITION_BASIC;

    // data provided to the tree grid
    @track  rows;
    @track  iconName = "utility:chevronright";
    gridData = DATA_BASIC;
    expanded = false;

    connectedCallback(){
        this.rows = this.createKeyId();
    }

    createKeyId() { 
    let updatedData = this.gridData;
        updatedData.forEach((parent, index) => {parent.keyId = index++;
                                                parent.expanded = false;
                                                     parent._children.forEach((child, index) => {
                                                        child.keyId = parent.keyId + "." + index++;
                                                    });
                            });             
        console.log('updated',updatedData);           
        return updatedData;
    }

    handleClickAccordion(){
        this.expanded = !this.expanded;
        setIconName();

    }

    setIconName(){
      this.iconName =  this.expanded ? "utility:chevrondown" : "utility:chevronright";
    }
    
    clickToExpandAll(e) {
        const grid =  this.template.querySelector('lightning-tree-grid');
        grid.expandAll();
    }

clickToCollapseAll(e) {
        const grid =  this.template.querySelector('lightning-tree-grid');
        grid.collapseAll();
    }
}



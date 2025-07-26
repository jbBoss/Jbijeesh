import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import HeroImage from './components/HeroImage';
import Img from './components/Img';
import Label from './components/Label';
import RadioButton from './components/RadioButton';
// Import all Table components from the index file
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './components/Table';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [radioSelection, setRadioSelection] = useState('cat');

  const handleClick = () => {
    setDisabled(true); // This will disable all components
  };

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];
  const tableHeaders = ['User ID', 'Name', 'Role'];
  const tableRows = [
    { id: 'u001', name: 'Alice', role: 'Admin' },
    { id: 'u002', name: 'Bob', role: 'Editor' },
    { id: 'u003', name: 'Charlie', role: 'Viewer' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <HeroImage
        imageUrl="https://i.pinimg.com/474x/66/4c/2a/664c2a7bfbb970b0aa56355bc284cfa7.jpg"
        heading="Component Library"
        subheading="Click the button to disable all components."
        disabled={disabled}
      />

      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Button
          label={disabled ? "All Components Disabled" : "Click Me to Disable"}
          disabled={disabled}
          onClick={handleClick}
        />
      </div>

      {/* Table Component */}
      <div style={{ margin: '2rem 0' }}>
          <Table disabled={disabled}>
              <TableHeader headers={tableHeaders} disabled={disabled} />
              <tbody>
                  {tableRows.map(row => (
                      <TableRow key={row.id} disabled={disabled}>
                          <TableCell content={row.id} disabled={disabled} />
                          <TableCell content={row.name} disabled={disabled} />
                          <TableCell content={row.role} disabled={disabled} />
                      </TableRow>
                  ))}
              </tbody>
              <TableFooter content="End of user data" disabled={disabled} />
          </Table>
      </div>


      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <Card
          title="Sample Card"
          description="This card will be disabled."
          imageSrc="https://i0.wp.com/www.wonderslist.com/wp-content/uploads/2012/09/funny-baby-faces.jpg"
          disabled={disabled}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <Label text="Choose an option" disabled={disabled} />
              <Dropdown
                options={dropdownOptions}
                selected={selectedOption}
                onChange={setSelectedOption}
                disabled={disabled}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                <Label text="Select an Animal" disabled={disabled} />
                <RadioButton
                  id="radio-cat"
                  name="animal"
                  value="cat"
                  label="Cat"
                  checked={radioSelection === 'cat'}
                  onChange={setRadioSelection}
                  disabled={disabled}
                />
                <RadioButton
                  id="radio-dog"
                  name="animal"
                  value="dog"
                  label="Dog"
                  checked={radioSelection === 'dog'}
                  onChange={setRadioSelection}
                  disabled={disabled}
                />
            </div>
        </div>
         <Img
            src="https://www.shutterstock.com/image-photo/closeup-portrait-fluffy-purebred-cat-600nw-2447243735.jpg"
            alt="A fluffy cat"
            width="300px"
            disabled={disabled}
          />
      </div>
    </div>
  );
}

export default App;
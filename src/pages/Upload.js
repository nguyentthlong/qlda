import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Form from 'react-bootstrap/Form';

function Upload() {
    return (
        <div className="d-flex">
            <div>
                <Sidebar />
            </div>
            <div
                style={{ flex: '1 1 auto', display: 'flex', flexFlow: 'column', height: '100vh', overflowY: 'hidden' }}
            >
                <Navbar />
                <div style={{ height: '100%' }}>
                    <div style={{ padding: '20px 5%', height: 'calc(100% - 64px)', overflowY: 'scroll' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, minmax(200px, 700px))' }}>
                            <div className="mt-5 w-100">
                                <h4 className="font-weight-bold mb-3">Default Table</h4>
                                <Form.Group controlId="formFile" className="mb-3">
                                    <Form.Label>Default file input example</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;

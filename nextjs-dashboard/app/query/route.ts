import { NextResponse } from 'next/server';
import { db } from '@vercel/postgres'; // Adjust the import based on your database setup

export async function GET() {
    try {
        const invoices = await listInvoices();
        return NextResponse.json(invoices);
    } catch (error) {
        return NextResponse.error();
    }
}

async function listInvoices() {
    const query = `
        SELECT invoices.amount, customers.name
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        WHERE invoices.amount = 666;
    `;
    
    const result = await db.query(query); // Adjust this line based on your database client
    return result.rows; // Adjust based on your database client
}

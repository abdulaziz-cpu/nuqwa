// Mock Payment Gateway (Stripe / HyperPay)

export const processPayment = async (amount: number, currency: string, source: string) => {
    console.log(`Processing payment of ${amount} ${currency} from ${source}`);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock Success
    if (amount > 0) {
        return {
            success: true,
            transactionId: "tx_" + Math.random().toString(36).substr(2, 9),
            status: "PAID"
        };
    } else {
        return {
            success: false,
            error: "Invalid amount"
        };
    }
};

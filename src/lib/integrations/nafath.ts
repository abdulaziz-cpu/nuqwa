/**
 * Nafath Identity Service Integration Stub
 * 
 * Simulates the Saudi National Digital Identity (Nafath) flow.
 * Flow:
 * 1. App requests verification for National ID.
 * 2. Nafath sends push notification to user's app.
 * 3. User approves in Nafath app.
 * 4. App polls status until COMPLETED.
 */

export const NafathService = {
    /**
     * Initiates a verification request.
     * Returns a requestId and a random 2-digit code to show the user.
     */
    async initiateVerification(nationalId: string) {
        console.log(`[Nafath] Initiating request for ID: ${nationalId}`);
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call

        return {
            requestId: "req_" + Math.floor(Math.random() * 1000000),
            randomCode: Math.floor(10 + Math.random() * 90), // 2 digit code
            status: "WAITING_USER_ACTION",
            expiry: new Date(Date.now() + 3 * 60 * 1000).toISOString() // 3 mins expiry
        };
    },

    /**
     * Checks the status of a verification request.
     * Simulates user approval after a few seconds.
     */
    async checkStatus(requestId: string) {
        console.log(`[Nafath] Checking status for ${requestId}`);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Simulate random "Waiting" vs "Completed" based on time/randomness
        // For demo purposes, let's say it succeeds if called > 5 seconds after init (simulated by caller logic or just random)
        const isApproved = Math.random() > 0.3;

        if (isApproved) {
            return {
                status: "COMPLETED",
                nationalId: "10********",
                fullNameAr: "أحمد محمد",
                fullNameEn: "Ahmed Mohammed",
                dob: "1990-01-01",
                gender: "M"
            };
        } else {
            return {
                status: "WAITING_USER_ACTION"
            };
        }
    }
};

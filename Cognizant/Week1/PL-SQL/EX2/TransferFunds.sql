CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN
    -- Check source balance
    SELECT balance
    INTO v_balance
    FROM ACCOUNTS
    WHERE account_id = p_from_account
    FOR UPDATE;

    IF v_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance');
    END IF;

    -- Deduct from source
    UPDATE ACCOUNTS
    SET balance = balance - p_amount
    WHERE account_id = p_from_account;

    -- Add to destination
    UPDATE ACCOUNTS
    SET balance = balance + p_amount
    WHERE account_id = p_to_account;

    COMMIT;
END;
/

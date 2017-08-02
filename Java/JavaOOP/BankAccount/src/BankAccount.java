import java.lang.Math;
import java.util.Random;

public class BankAccount {

    private String accountNumber;
    private long checkingBalance = 0;
    private long savingBalance = 0;
    private static int numOfAccounts = 0;
    private static long totalMoney = 0;

    public BankAccount(){
        this.accountNumber = randomAcc();
        numOfAccounts++;
    }
    private String randomAcc(){
        String acc = "";
        int max = 10;
        int min = 0;

        for(int i = 0; i < 10; i++) {
            int random = (int)(Math.random() * max + min);
            acc = acc.concat(String.valueOf(random));
        }
        return acc;
    }

    public String getAccountNumber() {
        return accountNumber;
    }
    public long getSavingBalance() {
        return savingBalance;
    }

    public long getCheckingBalance() {
        return checkingBalance;
    }

    public void deposit(String accountType, long amt){
        String acc = accountType.toLowerCase();
        if(acc.equals("checking")){
            this.checkingBalance += amt;
            this.totalMoney += amt;
        } else if(acc.equals("savings")){
            this.savingBalance += amt;
            this.totalMoney += amt;
        } else {
            System.out.println("Cannot find account");
        }
    }

    public void withdrawl(String accountType, long amt){
        String acc = accountType.toLowerCase();
        if(acc.equals("checking")&&checkingBalance > amt){
            this.checkingBalance -= amt;
            this.totalMoney -= amt;
        } else if(acc.equals("savings")&&savingBalance > amt){
            this.savingBalance -= amt;
            this.totalMoney -= amt;
        } else {
            System.out.println("insufficient Funds");
        }
    }

    public long totalAccountBalance(){
        long accBalance = this.checkingBalance + this.savingBalance;
        return accBalance;
    }

    public static long getTotalMoney() {
        return totalMoney;
    }

    public static int getNumOfAccounts() {
        return numOfAccounts;
    }
}

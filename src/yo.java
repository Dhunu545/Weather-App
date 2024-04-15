public class yo {
    public static void main(String[] args) {
        String s1 = new String("a");
        String s2 = "a";
        String s3 = s2.intern();
        System.out.println(s1 == s2);
        System.out.println(s2 == s3);
    }
}

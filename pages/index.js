import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Auth from "@/components/Auth";

export default function Home() {
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  );
}

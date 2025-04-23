
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar, User, Car, ImageIcon, Star } from "lucide-react";
import { useState } from "react";

// Simulação simples do conteúdo - substitui com o código do textdoc em produção real
export default function App() {
  const [language, setLanguage] = useState('pt');
  return (
    <div className="p-4 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold">São Mamede Caravans</h1>
      <p className="text-lg mb-4">Parque de autocaravanas com todos os serviços, em frente à Capela de São Mamede.</p>
      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="mb-4 border p-2 rounded">
        <option value="pt">Português</option>
        <option value="en">English</option>
      </select>
      <p>{language === 'pt' ? 'Serviços: água, luz, esgoto, segurança.' : 'Services: water, electricity, waste, security.'}</p>
    </div>
  );
}

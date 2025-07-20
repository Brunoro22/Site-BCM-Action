"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useActionState } from "react"
import { sendContactForm } from "./actions"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.02, y: -4 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 25 },
}

export default function Home() {
  const [state, formAction, isPending] = useActionState(sendContactForm, null)

  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8B0000] via-[#A00000] to-[#8B0000] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/frigorifico-com-alimentos.jpg"
            alt="Interior de supermercado moderno com prateleiras organizadas - Serviços de Promotoria BCM ACTION"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        {/* Adicionar este overlay gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#8B0000]/60 via-[#8B0000]/40 to-[#A00000]/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20 2xl:gap-24">
            <motion.div
              className="flex flex-col items-center lg:items-start space-y-6 sm:space-y-8 text-center lg:text-left w-full lg:w-1/2"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                className="flex justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12 w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="cursor-pointer"
              >
                <Image
                  src="/images/bcm-logo-white.png"
                  alt="BCM ACTION Logo"
                  width={240}
                  height={240}
                  className="h-auto w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64"
                />
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Serviços Especializados <br />
                Para Seu <span className="font-medium text-[#FF8C00]">Negócio</span>
              </motion.h1>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 tracking-wide uppercase text-center lg:text-left">
                  A solução completa para seu negócio
                </h3>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 xl:w-1/2"
              data-section="orcamento"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="bg-white/30 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/40 relative overflow-hidden">
                {/* Efeito de brilho glassmorphism */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>

                <div className="relative z-10">
                  <motion.h2
                    className="text-center text-white text-xl sm:text-2xl font-medium mb-6 sm:mb-8 drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    Faça Seu Orçamento
                  </motion.h2>

                  <motion.form
                    action={formAction}
                    className="space-y-4 sm:space-y-6 max-w-lg mx-auto lg:mx-0"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.div variants={fadeInUp}>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        required
                        className="h-12 sm:h-14 border-0 bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl text-sm sm:text-base text-white placeholder:text-white/80 transition-all duration-300 focus:bg-white/40 focus:shadow-lg focus:scale-[1.02] focus:border-white/50 focus:ring-2 focus:ring-[#8B0000] selection:bg-[#8B0000] selection:text-white"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="h-12 sm:h-14 border-0 bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl text-sm sm:text-base text-white placeholder:text-white/80 transition-all duration-300 focus:bg-white/40 focus:shadow-lg focus:scale-[1.02] focus:border-white/50 focus:ring-2 focus:ring-[#8B0000] selection:bg-[#8B0000] selection:text-white"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Telefone"
                        required
                        className="h-12 sm:h-14 border-0 bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl text-sm sm:text-base text-white placeholder:text-white/80 transition-all duration-300 focus:bg-white/40 focus:shadow-lg focus:scale-[1.02] focus:border-white/50 focus:ring-2 focus:ring-[#8B0000] selection:bg-[#8B0000] selection:text-white"
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <Textarea
                        name="message"
                        placeholder="Escreva sua mensagem *"
                        required
                        className="border-0 bg-white/30 backdrop-blur-sm rounded-xl sm:rounded-2xl min-h-[100px] sm:min-h-[120px] text-sm sm:text-base text-white placeholder:text-white/80 transition-all duration-300 focus:bg-white/40 focus:shadow-lg focus:scale-[1.02] resize-none focus:border-white/50 focus:ring-2 focus:ring-[#8B0000] selection:bg-[#8B0000] selection:text-white"
                      />
                    </motion.div>

                    {/* Mensagem de status */}
                    {state && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center p-3 rounded-xl ${
                          state.success
                            ? "bg-green-500/20 text-green-100 border border-green-400/30"
                            : "bg-red-500/20 text-red-100 border border-red-400/30"
                        }`}
                      >
                        {state.message}
                      </motion.div>
                    )}

                    <motion.div variants={fadeInUp}>
                      <motion.div {...scaleOnHover}>
                        <Button
                          type="submit"
                          disabled={isPending}
                          className="w-full sm:w-auto h-12 sm:h-14 lg:h-16 bg-gradient-to-r from-[#8B0000] to-[#A00000] hover:from-[#A00000] hover:to-[#8B0000] text-white border-0 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isPending ? "Enviando..." : "Enviar Solicitação"}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div className="text-center mb-12 sm:mb-16" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#8B0000] mb-4">
              Serviços
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">Soluções completas para sua empresa</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <ServiceCard
                title="Promotoria de vendas"
                description={[
                  "Promotores Exclusivos e Compartilhados",
                  "Reposição de PDV",
                  "Controle e organização de estoque",
                  "Gestão de produtos e vendas",
                ]}
                borderColor="border-[#8B0000]"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ServiceCard
                title="Serviços Administrativos"
                description={[
                  "Auxiliar Administrativo e Secretaria",
                  "Recepcionista e Telefonista",
                  "Suporte administrativo completo",
                  "Gestão de documentos e processos",
                ]}
                borderColor="border-[#FF8C00]"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-1">
              <ServiceCard
                title="Limpeza e Conservação"
                description={[
                  "Zeladoria e Jardinagem",
                  "Serviços Gerais e Copeira",
                  "Limpeza e conservação de ambientes",
                  "Manutenção predial especializada",
                ]}
                borderColor="border-[#8B0000]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div {...scaleOnHover}>
              <Button
                onClick={() => {
                  const orcamentoSection = document.querySelector('[data-section="orcamento"]')
                  if (orcamentoSection) {
                    orcamentoSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="w-full sm:w-auto h-12 sm:h-14 lg:h-16 px-8 sm:px-12 bg-gradient-to-r from-[#8B0000] to-[#A00000] hover:from-[#A00000] hover:to-[#8B0000] text-white rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium shadow-lg"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* What We Offer Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#8B0000] via-[#A00000] to-[#8B0000] text-white relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/escritorio-moderno.jpg"
            alt="Escritório moderno e profissional - Serviços Administrativos BCM ACTION"
            fill
            className="object-cover opacity-20"
          />
        </div>
        {/* Adicionar este overlay gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#8B0000]/70 via-[#A00000]/50 to-[#8B0000]/70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-20">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4">
              O Que Oferecemos <br />
              Para Sua Empresa
            </h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-4 sm:space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <OfferItem text="Profissionais Qualificados" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <OfferItem text="Eficiência no Atendimento" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <OfferItem text="Compromisso com o Seu Negócio" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <OfferItem text="Gestão de Pessoas" />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <OfferItem text="Preço Justo" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Where We Serve Section */}
      <AnimatedSection className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div className="text-center mb-12 sm:mb-16" {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#8B0000] mb-4">
              Onde Atendemos
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light">Nossa área de atuação</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <LocationCard
                title="Rio de Janeiro"
                cities="Cabo Frio, São Pedro da Aldeia, Búzios, Arraial do Cabo e Iguaba Grande."
                borderColor="border-[#8B0000]"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <LocationCard
                title="Minas Gerais"
                cities="Belo Horizonte, Betim, Contagem, Ibirité, Sarzedo, Ribeirão das Neves, Nova Lima, Sabará, Vespasiano, Lagoa Santa, Santa Luzia."
                borderColor="border-[#FF8C00]"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <LocationCard
                title="Espírito Santo"
                cities="Linhares, São Mateus, Aracruz, Colatina, Sooretama, Guriri."
                borderColor="border-[#8B0000]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div {...scaleOnHover}>
              <Button
                onClick={() => {
                  const orcamentoSection = document.querySelector('[data-section="orcamento"]')
                  if (orcamentoSection) {
                    orcamentoSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="w-full sm:w-auto h-12 sm:h-14 lg:h-16 px-8 sm:px-12 bg-gradient-to-r from-[#8B0000] to-[#A00000] hover:from-[#A00000] hover:to-[#8B0000] text-white rounded-xl sm:rounded-2xl text-base sm:text-lg font-medium shadow-lg"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Us Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-600/80 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/professional-team-background.jpg"
            alt="Equipe Profissional - Time trabalhando em colaboração"
            fill
            className="object-cover opacity-5"
          />
        </div>
        {/* Adicionar este overlay gradiente */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-gray-600/80 via-gray-700/60 to-gray-600/80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-20">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-8 sm:mb-12 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Quem Somos
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto lg:mx-0 xl:max-w-5xl space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-medium text-[#8B0000] mb-4">Sobre Nós</h3>
              <p className="font-light text-gray-700">
                Bem-vindo à BCM ACTION, uma empresa dedicada a fornecer soluções completas em serviços de alta
                qualidade. Atuamos em diversas áreas, incluindo promotoria de vendas, jardinagem, limpeza e conservação
                de ambientes, recepção e serviços administrativos. Somos o parceiro confiável e competente que você
                precisa para alcançar seus objetivos com profissionalismo e dedicação.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-medium text-[#8B0000] mb-4">Nossa Missão</h3>
              <p className="font-light text-gray-700">
                Atender a todas as necessidades dos nossos clientes com rapidez e competência, garantindo sempre
                resultados excepcionais em cada projeto. Acreditamos que a eficiência e a flexibilidade são fundamentais
                para o sucesso, e estamos comprometidos em superar as expectativas do nosso público.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl font-medium text-[#8B0000] mb-4">Nossos Valores</h3>
              <p className="font-light text-gray-700">
                Veracidade, comprometimento e eficiência são os valores que nos diferenciam no mercado. Trabalhamos
                incansavelmente para construir relacionamentos de confiança com nossos clientes, oferecendo um serviço
                que realmente faz a diferença em seus negócios.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-gradient-to-r from-[#8B0000] to-[#A00000] text-white py-12 sm:py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.1,
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <Image
              src="/images/bcm-logo-white.png"
              alt="BCM ACTION Logo"
              width={120}
              height={120}
              className="h-auto w-20 sm:w-24 md:w-28"
            />
          </motion.div>

          <motion.p
            className="text-center font-light opacity-90 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BCM ACTION SERVIÇOS - CNPJ: 52.418.107/0001-58
            <br />
            Copyright © 2025 - Todos os Direitos Reservados.
          </motion.p>
        </div>
      </motion.footer>

      {/* WhatsApp Button */}
      <WhatsAppButton className="bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8" />
    </main>
  )
}

function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  )
}

function ServiceCard({ title, description, borderColor }) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
      <Card className="bg-white shadow-xl border-0 h-full min-h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
        <CardContent className="p-6 sm:p-8">
          <div className={`w-10 sm:w-12 h-1 ${borderColor.replace("border-", "bg-")} rounded-full mb-4 sm:mb-6`}></div>
          <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 sm:mb-6">{title}</h3>
          <div className="space-y-2 sm:space-y-3">
            {description.map((item, index) => (
              <p key={index} className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function LocationCard({ title, cities, borderColor }) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
      <Card className="bg-white shadow-xl border-0 h-full rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
        <CardContent className="p-6 sm:p-8">
          <div className={`w-10 sm:w-12 h-1 ${borderColor.replace("border-", "bg-")} rounded-full mb-4 sm:mb-6`}></div>
          <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 sm:mb-6">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">{cities}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function OfferItem({ text }) {
  return (
    <motion.div
      className="flex items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
      whileHover={{ x: 8 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] rounded-full p-2 flex-shrink-0 shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.2 }}
      >
        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
      </motion.div>
      <span className="font-light text-base sm:text-lg">{text}</span>
    </motion.div>
  )
}

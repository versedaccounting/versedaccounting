import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleData {
  slug: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author?: string;
}

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const loadArticle = async () => {
      if (!slug) {
        setError('Article not found');
        setLoading(false);
        return;
      }

      try {
        // Mock article data - in a real app, this would load the actual markdown file
        const mockArticles: { [key: string]: ArticleData } = {
          'primeiro-artigo': {
            slug: 'primeiro-artigo',
            title: 'Como Organizar suas Finanças Empresariais',
            content: `# Como Organizar suas Finanças Empresariais

Manter as finanças empresariais organizadas é fundamental para o sucesso de qualquer negócio. Neste artigo, vamos explorar as melhores práticas para garantir que sua empresa tenha controle total sobre suas finanças.

## Por que a Organização Financeira é Importante?

Uma gestão financeira eficiente permite:

- **Tomada de decisões informadas**: Com dados precisos, você pode fazer escolhas estratégicas baseadas em fatos
- **Controle de fluxo de caixa**: Evite surpresas desagradáveis e mantenha a liquidez da empresa
- **Planejamento tributário**: Organize-se para cumprir obrigações fiscais e otimizar impostos
- **Crescimento sustentável**: Base sólida para expansão e investimentos

## Passos Essenciais para Organizar suas Finanças

### 1. Separe Contas Pessoais das Empresariais

Este é o primeiro e mais importante passo. Misturar finanças pessoais com empresariais pode causar:
- Dificuldades na prestação de contas
- Problemas com a Receita Federal
- Perda de controle sobre os gastos reais da empresa

### 2. Implemente um Sistema de Controle

Utilize ferramentas adequadas para:
- Registrar todas as entradas e saídas
- Categorizar despesas e receitas
- Gerar relatórios periódicos
- Acompanhar indicadores financeiros

### 3. Estabeleça Rotinas Financeiras

Crie hábitos como:
- Conciliação bancária semanal
- Análise mensal de resultados
- Planejamento trimestral
- Revisão anual de estratégias

## Ferramentas Recomendadas

Para pequenas e médias empresas, recomendamos:

1. **Software de gestão financeira**: QuickBooks, Conta Azul, ou similar
2. **Planilhas estruturadas**: Para controles específicos
3. **Apps de gestão**: Para acompanhamento móvel
4. **Assessoria contábil**: Para orientação especializada

## Indicadores Importantes para Acompanhar

### Fluxo de Caixa
Monitore entradas e saídas diárias para evitar problemas de liquidez.

### Margem de Lucro
Calcule regularmente para entender a rentabilidade do negócio.

### Ponto de Equilíbrio
Saiba exatamente quanto precisa faturar para cobrir todos os custos.

### Prazo Médio de Recebimento
Controle o tempo entre a venda e o recebimento.

## Erros Comuns a Evitar

- **Não registrar pequenas despesas**: Todo gasto deve ser documentado
- **Atrasar a conciliação bancária**: Faça semanalmente
- **Ignorar o planejamento tributário**: Organize-se com antecedência
- **Não ter reserva de emergência**: Mantenha pelo menos 3 meses de despesas

## Conclusão

A organização financeira não é um luxo, mas uma necessidade para qualquer empresa que deseja crescer de forma sustentável. Comece implementando os passos básicos e vá evoluindo gradualmente.

Lembre-se: investir tempo na organização financeira hoje significa economizar tempo, dinheiro e dores de cabeça no futuro.

---

*Precisa de ajuda para organizar as finanças da sua empresa? Entre em contato conosco e descubra como podemos ajudar você a ter controle total sobre suas finanças empresariais.*`,
            date: '2024-01-15',
            readTime: '5 min',
            category: 'Finanças',
            author: 'Versed Accounting Team'
          },
          'segundo-artigo': {
            slug: 'segundo-artigo',
            title: 'Planejamento Tributário para Pequenas Empresas',
            content: `# Planejamento Tributário para Pequenas Empresas

O planejamento tributário é uma das estratégias mais eficazes para reduzir a carga fiscal da sua empresa de forma legal e segura. Neste guia completo, você aprenderá como implementar um planejamento tributário eficiente.

## O que é Planejamento Tributário?

O planejamento tributário é o conjunto de ações legais que visam reduzir ou postergar o pagamento de tributos, aproveitando as oportunidades oferecidas pela legislação fiscal.

### Benefícios do Planejamento Tributário

- **Redução da carga tributária**: Economia de até 30% em impostos
- **Melhoria do fluxo de caixa**: Mais recursos para investir no negócio
- **Conformidade fiscal**: Cumprimento correto das obrigações
- **Vantagem competitiva**: Preços mais competitivos no mercado

## Regimes Tributários no Brasil

### Simples Nacional
Ideal para empresas com faturamento até R$ 4,8 milhões anuais.

**Vantagens:**
- Alíquotas reduzidas
- Unificação de tributos
- Menos burocracia

**Desvantagens:**
- Limitações de atividades
- Restrições para alguns tipos de empresa

### Lucro Presumido
Para empresas com faturamento até R$ 78 milhões anuais.

**Características:**
- Base de cálculo presumida
- Alíquotas fixas
- Simplicidade no cálculo

### Lucro Real
Obrigatório para empresas com faturamento superior a R$ 78 milhões.

**Características:**
- Tributação sobre lucro efetivo
- Maior complexidade
- Possibilidade de compensação de prejuízos

## Estratégias de Planejamento Tributário

### 1. Escolha do Regime Tributário Adequado

A escolha correta pode representar uma economia significativa. Fatores a considerar:
- Faturamento anual
- Margem de lucro
- Tipo de atividade
- Estrutura de custos

### 2. Aproveitamento de Incentivos Fiscais

Explore benefícios como:
- Lei do Bem (inovação tecnológica)
- Lei Rouanet (cultura)
- Incentivos regionais
- Benefícios setoriais

### 3. Planejamento de Investimentos

Organize investimentos para:
- Aproveitar depreciação acelerada
- Utilizar incentivos de inovação
- Otimizar dedutibilidade de despesas

### 4. Gestão de Prazos

Planeje pagamentos para:
- Aproveitar descontos
- Evitar multas e juros
- Otimizar fluxo de caixa

## Cuidados e Riscos

### Elisão vs. Evasão Fiscal

- **Elisão**: Legal, planejamento dentro da lei
- **Evasão**: Ilegal, sonegação de impostos

### Norma Geral Antielisão

Cuidado com planejamentos que:
- Não tenham propósito negocial
- Sejam artificiais ou abusivos
- Visem apenas economia fiscal

## Documentação e Controles

Mantenha sempre:
- Documentação completa das operações
- Justificativas para escolhas tributárias
- Controles internos adequados
- Assessoria especializada

## Quando Revisar o Planejamento

Revise seu planejamento quando:
- Houver mudanças na legislação
- A empresa crescer significativamente
- Mudarem as atividades da empresa
- Surgirem novos incentivos

## Ferramentas de Apoio

### Software Tributário
- Cálculo automático de impostos
- Acompanhamento de obrigações
- Simulações de cenários

### Assessoria Especializada
- Análise personalizada
- Acompanhamento de mudanças legais
- Implementação de estratégias

## Cronograma de Planejamento Anual

### Janeiro-Março
- Análise dos resultados do ano anterior
- Revisão do regime tributário
- Planejamento para o ano corrente

### Abril-Junho
- Acompanhamento dos resultados
- Ajustes necessários
- Aproveitamento de incentivos

### Julho-Setembro
- Avaliação do meio do ano
- Projeções para o final do ano
- Estratégias de final de exercício

### Outubro-Dezembro
- Implementação de estratégias finais
- Preparação para o próximo ano
- Documentação das ações realizadas

## Conclusão

O planejamento tributário é essencial para a saúde financeira da sua empresa. Quando bem executado, pode resultar em economia significativa e vantagem competitiva.

Lembre-se: o planejamento tributário deve ser feito com responsabilidade e sempre dentro da legalidade. A assessoria de profissionais especializados é fundamental para o sucesso.

---

*Quer implementar um planejamento tributário eficiente na sua empresa? Nossa equipe de especialistas pode ajudar você a reduzir sua carga tributária de forma legal e segura. Entre em contato conosco!*`,
            date: '2024-01-10',
            readTime: '7 min',
            category: 'Impostos',
            author: 'Versed Accounting Team'
          }
        };

        const articleData = mockArticles[slug];
        if (articleData) {
          setArticle(articleData);
        } else {
          setError('Article not found');
        }
      } catch (error) {
        console.error('Error loading article:', error);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();

    // Trigger animations after a short delay
    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => {
        el.classList.add('in-view');
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4">
        <div className="container max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen pt-28 pb-20 px-4">
        <div className="container max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-secondary-600 mb-8">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/articles" className="btn btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={20} />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container max-w-4xl">
        {/* Back to articles */}
        <div className="mb-8">
          <Link 
            to="/articles" 
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Articles
          </Link>
        </div>

        {/* Article header */}
        <header className="mb-8 animate-on-scroll in-view">
          <div className="mb-4">
            <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-6 text-secondary-500">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(article.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{article.readTime}</span>
            </div>
            {article.author && (
              <div>
                <span>Por {article.author}</span>
              </div>
            )}
          </div>
        </header>

        {/* Article content */}
        <article className="prose prose-lg max-w-none animate-on-scroll in-view">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            className="markdown-content"
          >
            {article.content}
          </ReactMarkdown>
        </article>

        {/* Call to action */}
        <div className="mt-12 p-8 bg-gray-50 rounded-lg animate-on-scroll in-view">
          <h3 className="text-2xl font-bold mb-4">Need Professional Help?</h3>
          <p className="text-secondary-600 mb-6">
            Our team of accounting experts is ready to help you implement these strategies in your business.
          </p>
          <Link to="/#contact" className="btn btn-primary inline-flex items-center gap-2">
            Get Expert Advice
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
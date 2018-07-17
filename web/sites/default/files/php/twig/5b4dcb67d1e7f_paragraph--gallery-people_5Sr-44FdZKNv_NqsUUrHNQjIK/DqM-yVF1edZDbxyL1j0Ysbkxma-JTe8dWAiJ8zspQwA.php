<?php

/* themes/custom/clintons/templates/paragraph/paragraph--gallery-people--default.html.twig */
class __TwigTemplate_dbc5695948ded5c0ad7e374ce391886e49238dc6934d27b489c74af7133fea05 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'paragraph' => array($this, 'block_paragraph'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 42, "block" => 50);
        $filters = array("clean_class" => 46);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'block'),
                array('clean_class'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 42
        $context["classes"] = array(0 => "paragraph", 1 => "carousel-item", 2 => "col-md-3 ", 3 => ("paragraph--type--" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(        // line 46
($context["paragraph"] ?? null), "bundle", array()))), 4 => ((        // line 47
($context["view_mode"] ?? null)) ? (("paragraph--view-mode--" . \Drupal\Component\Utility\Html::getClass(($context["view_mode"] ?? null)))) : ("")));
        // line 50
        $this->displayBlock('paragraph', $context, $blocks);
    }

    public function block_paragraph($context, array $blocks = array())
    {
        // line 51
        echo "  <div";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "html", null, true));
        echo ">
    ";
        // line 52
        $this->displayBlock('content', $context, $blocks);
        // line 59
        echo "  </div>
";
    }

    // line 52
    public function block_content($context, array $blocks = array())
    {
        // line 53
        echo "      <div class=\"panel panel-default\">
        <div class=\"panel-thumbnail\">
          ";
        // line 55
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content"] ?? null), "html", null, true));
        echo "
        </div>
      </div>
    ";
    }

    public function getTemplateName()
    {
        return "themes/custom/clintons/templates/paragraph/paragraph--gallery-people--default.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  74 => 55,  70 => 53,  67 => 52,  62 => 59,  60 => 52,  55 => 51,  49 => 50,  47 => 47,  46 => 46,  45 => 42,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/custom/clintons/templates/paragraph/paragraph--gallery-people--default.html.twig", "/Users/macbook/sites/clintons2/web/themes/custom/clintons/templates/paragraph/paragraph--gallery-people--default.html.twig");
    }
}





<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>REM-unit-polyfill/rem.js at master · chuckcarpenter/REM-unit-polyfill · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="chuckcarpenter/REM-unit-polyfill" name="twitter:title" /><meta content="REM-unit-polyfill - A polyfill to parse CSS links and rewrite pixel equivalents into head for non supporting browsers " name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/706378?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/706378?v=2&amp;s=400" property="og:image" /><meta content="chuckcarpenter/REM-unit-polyfill" property="og:title" /><meta content="https://github.com/chuckcarpenter/REM-unit-polyfill" property="og:url" /><meta content="REM-unit-polyfill - A polyfill to parse CSS links and rewrite pixel equivalents into head for non supporting browsers " property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="46249CF2:7B5D:1D2C67C1:53FD0D81" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="tDsgRvER00xyKTJywE0DmehRHErUylNpTl1FhMs32uFOkeloo65Y1I+gnlGeui6Qbs0tVO9pnd9g2+jb6yujsw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-097e3a01c37cee1b559eba68515b4477a84f8e04.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-41e9a0027746729d5f906aa2b9f7fce786fb0a14.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="ffa29079c9fe52f0e04f691489e1dc2f">

      
  <meta name="description" content="REM-unit-polyfill - A polyfill to parse CSS links and rewrite pixel equivalents into head for non supporting browsers ">
  <meta name="go-import" content="github.com/chuckcarpenter/REM-unit-polyfill git https://github.com/chuckcarpenter/REM-unit-polyfill.git">

  <meta content="706378" name="octolytics-dimension-user_id" /><meta content="chuckcarpenter" name="octolytics-dimension-user_login" /><meta content="5285733" name="octolytics-dimension-repository_id" /><meta content="chuckcarpenter/REM-unit-polyfill" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5285733" name="octolytics-dimension-repository_network_root_id" /><meta content="chuckcarpenter/REM-unit-polyfill" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/chuckcarpenter/REM-unit-polyfill/commits/master.atom" rel="alternate" title="Recent Commits to REM-unit-polyfill:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fchuckcarpenter%2FREM-unit-polyfill%2Fblob%2Fmaster%2Fjs%2Frem.js">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search">
      <form accept-charset="UTF-8" action="/chuckcarpenter/REM-unit-polyfill/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/chuckcarpenter/REM-unit-polyfill/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fchuckcarpenter%2FREM-unit-polyfill"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/chuckcarpenter/REM-unit-polyfill/stargazers">
      316
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fchuckcarpenter%2FREM-unit-polyfill"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/chuckcarpenter/REM-unit-polyfill/network" class="social-count">
        117
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/chuckcarpenter" class="url fn" itemprop="url" rel="author"><span itemprop="title">chuckcarpenter</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/chuckcarpenter/REM-unit-polyfill" class="js-current-repository js-repo-home-link">REM-unit-polyfill</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/chuckcarpenter/REM-unit-polyfill/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/chuckcarpenter/REM-unit-polyfill" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /chuckcarpenter/REM-unit-polyfill">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/chuckcarpenter/REM-unit-polyfill/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /chuckcarpenter/REM-unit-polyfill/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/chuckcarpenter/REM-unit-polyfill/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /chuckcarpenter/REM-unit-polyfill/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/chuckcarpenter/REM-unit-polyfill/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /chuckcarpenter/REM-unit-polyfill/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/chuckcarpenter/REM-unit-polyfill/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /chuckcarpenter/REM-unit-polyfill/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/chuckcarpenter/REM-unit-polyfill.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/chuckcarpenter/REM-unit-polyfill.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/chuckcarpenter/REM-unit-polyfill" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/chuckcarpenter/REM-unit-polyfill" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save chuckcarpenter/REM-unit-polyfill to your computer and use it in GitHub Desktop." aria-label="Save chuckcarpenter/REM-unit-polyfill to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/chuckcarpenter/REM-unit-polyfill/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download chuckcarpenter/REM-unit-polyfill as a zip file"
                   title="Download chuckcarpenter/REM-unit-polyfill as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/chuckcarpenter/REM-unit-polyfill/blob/330220eff38135ad378d0ac5958f19c8bde41c13/js/rem.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f1ba4351efcb3a3237b5741b3c2f2c24 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/bower/js/rem.js"
                 data-name="bower"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="bower">bower</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/coffeescript/js/rem.js"
                 data-name="coffeescript"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="coffeescript">coffeescript</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/gh-pages/js/rem.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/ls/issue_15/js/rem.js"
                 data-name="ls/issue_15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="ls/issue_15">ls/issue_15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/lsvx/code_cleanup/js/rem.js"
                 data-name="lsvx/code_cleanup"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="lsvx/code_cleanup">lsvx/code_cleanup</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/lsvx/updated_readme/js/rem.js"
                 data-name="lsvx/updated_readme"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="lsvx/updated_readme">lsvx/updated_readme</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/master/js/rem.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/media_queries/js/rem.js"
                 data-name="media_queries"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="media_queries">media_queries</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/pr-38/js/rem.js"
                 data-name="pr-38"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="pr-38">pr-38</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/streamline/js/rem.js"
                 data-name="streamline"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="streamline">streamline</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/blob/xdomainrequest/js/rem.js"
                 data-name="xdomainrequest"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="xdomainrequest">xdomainrequest</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.3.2/js/rem.js"
                 data-name="v1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.2">v1.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.3.1/js/rem.js"
                 data-name="v1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.1">v1.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.3.0/js/rem.js"
                 data-name="v1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0">v1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.2.5/js/rem.js"
                 data-name="v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.5">v1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.2.4/js/rem.js"
                 data-name="v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.4">v1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.2.3/js/rem.js"
                 data-name="v1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.3">v1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.2.2/js/rem.js"
                 data-name="v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.2">v1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.2.1/js/rem.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.2.0/js/rem.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.1.0/js/rem.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.1/js/rem.js"
                 data-name="v1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1">v1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/chuckcarpenter/REM-unit-polyfill/tree/v1.0/js/rem.js"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/chuckcarpenter/REM-unit-polyfill/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="js/rem.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/chuckcarpenter/REM-unit-polyfill" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">REM-unit-polyfill</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/chuckcarpenter/REM-unit-polyfill/tree/master/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">rem.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Alexey" class="avatar" data-user="3367289" height="24" src="https://avatars1.githubusercontent.com/u/3367289?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/alray" rel="contributor">alray</a></span>
        <time datetime="2014-06-26T11:06:29+02:00" is="relative-time">June 26, 2014</time>
        <div class="commit-title">
            <a href="/chuckcarpenter/REM-unit-polyfill/commit/774196f6d61e585f8eea66e7f9e25b50a79f3a67" class="message" data-pjax="true" title="Code optimization

1) Fixed unused and duplicating variables in xhr() arguments
2) Code was minified (unnecessary function and condition were removed)
3) Code style fixes">Code optimization</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>13</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="lsvx" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=lsvx"><img alt="Lucas Serven" class="avatar" data-user="1369275" height="20" src="https://avatars0.githubusercontent.com/u/1369275?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="chuckcarpenter" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=chuckcarpenter"><img alt="Chuck Carpenter" class="avatar" data-user="706378" height="20" src="https://avatars1.githubusercontent.com/u/706378?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="danReynolds" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=danReynolds"><img alt="Dan Reynolds" class="avatar" data-user="2192930" height="20" src="https://avatars2.githubusercontent.com/u/2192930?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="alray" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=alray"><img alt="Alexey" class="avatar" data-user="3367289" height="20" src="https://avatars3.githubusercontent.com/u/3367289?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="DFurnes" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=DFurnes"><img alt="David Furnes" class="avatar" data-user="583202" height="20" src="https://avatars0.githubusercontent.com/u/583202?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="bradmerlin" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=bradmerlin"><img alt="bradmerlin" class="avatar" data-user="1826172" height="20" src="https://avatars1.githubusercontent.com/u/1826172?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rbhalla" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=rbhalla"><img alt="rbhalla" class="avatar" data-user="5897045" height="20" src="https://avatars1.githubusercontent.com/u/5897045?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kdeathboo" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=kdeathboo"><img alt="kdeathboo" class="avatar" data-user="3408028" height="20" src="https://avatars3.githubusercontent.com/u/3408028?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="elsom25" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=elsom25"><img alt="Jesse McGinnis" class="avatar" data-user="542544" height="20" src="https://avatars2.githubusercontent.com/u/542544?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="asakurayoh" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=asakurayoh"><img alt="Maxime Lafontaine" class="avatar" data-user="327551" height="20" src="https://avatars1.githubusercontent.com/u/327551?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="RedKnight91" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=RedKnight91"><img alt="Michael Cazzarolli" class="avatar" data-user="2537216" height="20" src="https://avatars1.githubusercontent.com/u/2537216?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="muchabi" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=muchabi"><img alt="muchabi" class="avatar" data-user="1334416" height="20" src="https://avatars3.githubusercontent.com/u/1334416?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ajb" href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js?author=ajb"><img alt="Adam Becker" class="avatar" data-user="1270317" height="20" src="https://avatars3.githubusercontent.com/u/1270317?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Lucas Serven" data-user="1369275" height="24" src="https://avatars2.githubusercontent.com/u/1369275?v=2&amp;s=48" width="24" />
            <a href="/lsvx">lsvx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chuck Carpenter" data-user="706378" height="24" src="https://avatars3.githubusercontent.com/u/706378?v=2&amp;s=48" width="24" />
            <a href="/chuckcarpenter">chuckcarpenter</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dan Reynolds" data-user="2192930" height="24" src="https://avatars0.githubusercontent.com/u/2192930?v=2&amp;s=48" width="24" />
            <a href="/danReynolds">danReynolds</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alexey" data-user="3367289" height="24" src="https://avatars1.githubusercontent.com/u/3367289?v=2&amp;s=48" width="24" />
            <a href="/alray">alray</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="David Furnes" data-user="583202" height="24" src="https://avatars2.githubusercontent.com/u/583202?v=2&amp;s=48" width="24" />
            <a href="/DFurnes">DFurnes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="bradmerlin" data-user="1826172" height="24" src="https://avatars3.githubusercontent.com/u/1826172?v=2&amp;s=48" width="24" />
            <a href="/bradmerlin">bradmerlin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="rbhalla" data-user="5897045" height="24" src="https://avatars3.githubusercontent.com/u/5897045?v=2&amp;s=48" width="24" />
            <a href="/rbhalla">rbhalla</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="kdeathboo" data-user="3408028" height="24" src="https://avatars1.githubusercontent.com/u/3408028?v=2&amp;s=48" width="24" />
            <a href="/kdeathboo">kdeathboo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jesse McGinnis" data-user="542544" height="24" src="https://avatars0.githubusercontent.com/u/542544?v=2&amp;s=48" width="24" />
            <a href="/elsom25">elsom25</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Maxime Lafontaine" data-user="327551" height="24" src="https://avatars3.githubusercontent.com/u/327551?v=2&amp;s=48" width="24" />
            <a href="/asakurayoh">asakurayoh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Michael Cazzarolli" data-user="2537216" height="24" src="https://avatars3.githubusercontent.com/u/2537216?v=2&amp;s=48" width="24" />
            <a href="/RedKnight91">RedKnight91</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="muchabi" data-user="1334416" height="24" src="https://avatars1.githubusercontent.com/u/1334416?v=2&amp;s=48" width="24" />
            <a href="/muchabi">muchabi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Becker" data-user="1270317" height="24" src="https://avatars1.githubusercontent.com/u/1270317?v=2&amp;s=48" width="24" />
            <a href="/ajb">ajb</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>212 lines (177 sloc)</span>
          <span class="meta-divider"></span>
        <span>9.008 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/chuckcarpenter/REM-unit-polyfill/raw/master/js/rem.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/chuckcarpenter/REM-unit-polyfill/blame/master/js/rem.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/chuckcarpenter/REM-unit-polyfill/commits/master/js/rem.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">    <span class="s2">&quot;use strict&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">    <span class="c1">// test for REM unit support</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">    <span class="kd">var</span> <span class="nx">cssremunit</span> <span class="o">=</span>  <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span> <span class="s1">&#39;div&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">            <span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">=</span> <span class="s1">&#39;font-size: 1rem;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">        <span class="k">return</span> <span class="p">(</span><span class="sr">/rem/</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">    <span class="c1">// filter returned links for stylesheets</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">    <span class="nx">isStyleSheet</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">styles</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;link&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">            <span class="nx">filteredLinks</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">        <span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">styles</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span> <span class="nx">styles</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">rel</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;stylesheet&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">styles</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s1">&#39;data-norem&#39;</span><span class="p">)</span> <span class="o">===</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">                <span class="nx">filteredLinks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">styles</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">href</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">        <span class="k">return</span> <span class="nx">filteredLinks</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">   <span class="nx">processLinks</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">        <span class="c1">//prepare to match each link</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">        <span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">links</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">            <span class="nx">xhr</span><span class="p">(</span> <span class="nx">links</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">storeCSS</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">    <span class="nx">storeCSS</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">response</span><span class="p">,</span> <span class="nx">link</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">        <span class="nx">preCSS</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">response</span><span class="p">.</span><span class="nx">responseText</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">        <span class="nx">CSSLinks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">link</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">        <span class="k">if</span><span class="p">(</span> <span class="nx">CSSLinks</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="nx">links</span><span class="p">.</span><span class="nx">length</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">            <span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span> <span class="o">&lt;</span>  <span class="nx">CSSLinks</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">                <span class="nx">matchCSS</span><span class="p">(</span> <span class="nx">preCSS</span><span class="p">[</span><span class="nx">j</span><span class="p">],</span> <span class="nx">CSSLinks</span><span class="p">[</span><span class="nx">j</span><span class="p">]</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">            <span class="k">if</span><span class="p">(</span> <span class="p">(</span> <span class="nx">links</span> <span class="o">=</span> <span class="nx">importLinks</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">){</span> <span class="c1">//after finishing all current links, set links equal to the new imports found</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">                <span class="nx">CSSLinks</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">                <span class="nx">preCSS</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">                <span class="nx">importLinks</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">                <span class="nx">processLinks</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">                <span class="nx">buildCSS</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">    <span class="nx">matchCSS</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">sheetCSS</span><span class="p">,</span> <span class="nx">link</span> <span class="p">)</span> <span class="p">{</span> <span class="c1">// collect all of the rules from the xhr response texts and match them to a pattern</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">clean</span> <span class="o">=</span> <span class="nx">removeMediaQueries</span><span class="p">(</span> <span class="nx">sheetCSS</span> <span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/\*[\s\S]*?\*\//g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">),</span> <span class="c1">// remove MediaQueries and comments</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">            <span class="nx">pattern</span> <span class="o">=</span> <span class="sr">/[\w\d\s\-\/\\\[\]:,.&#39;&quot;*()&lt;&gt;+~%#^$_=|@]+\{[\w\d\s\-\/\\%#:!;,.&#39;&quot;*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!;,.&#39;&quot;*()]*\}/g</span><span class="p">,</span> <span class="c1">//find selectors that use rem in one or more of their rules</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">            <span class="nx">current</span> <span class="o">=</span> <span class="nx">clean</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">pattern</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">            <span class="nx">remPattern</span> <span class="o">=</span><span class="sr">/\d*\.?\d+rem/g</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">            <span class="nx">remCurrent</span> <span class="o">=</span> <span class="nx">clean</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">remPattern</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">            <span class="nx">sheetPathPattern</span> <span class="o">=</span> <span class="sr">/(.*\/)/</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">            <span class="nx">sheetPath</span> <span class="o">=</span> <span class="nx">sheetPathPattern</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">link</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span> <span class="c1">//relative path to css file specified in @import</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">            <span class="nx">importPattern</span> <span class="o">=</span> <span class="sr">/@import (?:url\()?[&#39;&quot;]?([^&#39;\)&quot;]*)[&#39;&quot;]?\)?[^;]*/gm</span><span class="p">,</span> <span class="c1">//matches all @import variations outlined at: https://developer.mozilla.org/en-US/docs/Web/CSS/@import</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">            <span class="nx">importStatement</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">        <span class="k">while</span><span class="p">(</span> <span class="p">(</span><span class="nx">importStatement</span> <span class="o">=</span> <span class="nx">importPattern</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">sheetCSS</span><span class="p">))</span> <span class="o">!==</span> <span class="kc">null</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">            <span class="nx">importLinks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">sheetPath</span> <span class="o">+</span> <span class="nx">importStatement</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">        <span class="k">if</span><span class="p">(</span> <span class="nx">current</span> <span class="o">!==</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">current</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="mi">0</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">            <span class="nx">found</span> <span class="o">=</span> <span class="nx">found</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span> <span class="nx">current</span> <span class="p">);</span> <span class="c1">// save all of the blocks of rules with rem in a property</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">            <span class="nx">foundProps</span> <span class="o">=</span> <span class="nx">foundProps</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span> <span class="nx">remCurrent</span> <span class="p">);</span> <span class="c1">// save all of the properties with rem</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">    <span class="nx">buildCSS</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="c1">// first build each individual rule from elements in the found array and then add it to the string of rules.</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">pattern</span> <span class="o">=</span> <span class="sr">/[\w\d\s\-\/\\%#:,.&#39;&quot;*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!,.&#39;&quot;*()]*[;}]/g</span><span class="p">;</span> <span class="c1">// find properties with rem values in them</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">        <span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">found</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">            <span class="nx">rules</span> <span class="o">=</span> <span class="nx">rules</span> <span class="o">+</span> <span class="nx">found</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">found</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;{&quot;</span><span class="p">)</span><span class="o">+</span><span class="mi">1</span><span class="p">);</span> <span class="c1">// save the selector portion of each rule with a rem value</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">current</span> <span class="o">=</span> <span class="nx">found</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">match</span><span class="p">(</span> <span class="nx">pattern</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">            <span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">j</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">j</span><span class="o">&lt;</span><span class="nx">current</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">j</span><span class="o">++</span> <span class="p">){</span> <span class="c1">// build a new set of with only the selector and properties that have rem in the value</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">                <span class="nx">rules</span> <span class="o">=</span> <span class="nx">rules</span> <span class="o">+</span> <span class="nx">current</span><span class="p">[</span><span class="nx">j</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">                <span class="k">if</span><span class="p">(</span> <span class="nx">j</span> <span class="o">===</span> <span class="nx">current</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">rules</span><span class="p">[</span><span class="nx">rules</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> <span class="o">!==</span> <span class="s2">&quot;}&quot;</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">                    <span class="nx">rules</span> <span class="o">=</span> <span class="nx">rules</span> <span class="o">+</span> <span class="s2">&quot;\n}&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">        <span class="nx">parseCSS</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">    <span class="nx">parseCSS</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="c1">// replace each set of parentheses with evaluated content</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">        <span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">foundProps</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">            <span class="nx">css</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">round</span><span class="p">(</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">foundProps</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">substr</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">foundProps</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">length</span><span class="o">-</span><span class="mi">3</span><span class="p">)</span><span class="o">*</span><span class="nx">fontSize</span><span class="p">)</span> <span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">        <span class="nx">loadCSS</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">    <span class="nx">loadCSS</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="c1">// replace and load the new rules</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">        <span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">css</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">){</span> <span class="c1">// only run this loop as many times as css has entries</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">            <span class="k">if</span><span class="p">(</span> <span class="nx">css</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">                <span class="nx">rules</span> <span class="o">=</span> <span class="nx">rules</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">foundProps</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span><span class="nx">css</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">);</span> <span class="c1">// replace old rules with our processed rules</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">remcss</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span> <span class="s1">&#39;style&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">        <span class="nx">remcss</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span> <span class="s1">&#39;type&#39;</span><span class="p">,</span> <span class="s1">&#39;text/css&#39;</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">        <span class="nx">remcss</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="s1">&#39;remReplace&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">        <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span> <span class="s1">&#39;head&#39;</span> <span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">remcss</span> <span class="p">);</span>   <span class="c1">// create the new element</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">        <span class="k">if</span><span class="p">(</span> <span class="nx">remcss</span><span class="p">.</span><span class="nx">styleSheet</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">            <span class="nx">remcss</span><span class="p">.</span><span class="nx">styleSheet</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">=</span> <span class="nx">rules</span><span class="p">;</span> <span class="c1">// IE8 will not support innerHTML on read-only elements, such as STYLE</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">            <span class="nx">remcss</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span> <span class="nx">rules</span> <span class="p">)</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">    <span class="nx">xhr</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span> <span class="c1">// create new XMLHttpRequest object and run it</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">        <span class="k">try</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">            <span class="c1">//try to create a request object</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">            <span class="c1">//arranging the two conditions this way is for IE7/8&#39;s benefit</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">            <span class="c1">//so that it works with any combination of ActiveX or Native XHR settings, </span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">            <span class="c1">//as long as one or the other is enabled; but if both are enabled</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">            <span class="c1">//it prefers ActiveX, which means it still works with local files</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">            <span class="c1">//(Native XHR in IE7/8 is blocked and throws &quot;access is denied&quot;,</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">            <span class="c1">// but ActiveX is permitted if the user allows it [default is to prompt])</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">ActiveXObject</span> <span class="o">?</span> <span class="p">(</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s1">&#39;Microsoft.XMLHTTP&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="k">new</span> <span class="nx">ActiveXObject</span><span class="p">(</span><span class="s1">&#39;Msxml2.XMLHTTP&#39;</span><span class="p">)</span> <span class="p">)</span> <span class="o">:</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">            <span class="nx">xhr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span> <span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">            <span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">                <span class="k">if</span> <span class="p">(</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">===</span> <span class="mi">4</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">                    <span class="nx">callback</span><span class="p">(</span><span class="nx">xhr</span><span class="p">,</span> <span class="nx">url</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">                <span class="p">}</span> <span class="c1">// else { callback function on AJAX error }</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">            <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">            <span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span> <span class="nb">window</span><span class="p">.</span><span class="nx">XDomainRequest</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">                <span class="kd">var</span> <span class="nx">xdr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XDomainRequest</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">                <span class="nx">xdr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="s1">&#39;get&#39;</span><span class="p">,</span> <span class="nx">url</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">                <span class="nx">xdr</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">                    <span class="nx">callback</span><span class="p">(</span><span class="nx">xdr</span><span class="p">,</span> <span class="nx">url</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">                <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">                <span class="nx">xdr</span><span class="p">.</span><span class="nx">onerror</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">                    <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="c1">// xdr load fail</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">                <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">                <span class="nx">xdr</span><span class="p">.</span><span class="nx">send</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">    <span class="c1">// Remove queries.</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">    <span class="nx">removeMediaQueries</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">css</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">        <span class="c1">// Test for Media Query support</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">matchMedia</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">msMatchMedia</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">            <span class="c1">// If the browser doesn&#39;t support media queries, we find all @media declarations in the CSS and remove them.</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">            <span class="c1">// Note: Since @rules can&#39;t be nested in the CSS spec, we&#39;re safe to just check for the closest following &quot;}}&quot; to the &quot;@media&quot;.</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">            <span class="nx">css</span> <span class="o">=</span> <span class="nx">css</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/@media[\s\S]*?\}\s*\}/g</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">        <span class="k">return</span> <span class="nx">css</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">    <span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">cssremunit</span><span class="p">()</span> <span class="p">){</span> <span class="c1">// this checks if the rem value is supported</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">rules</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="c1">// initialize the rules variable in this scope so it can be used later</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">            <span class="nx">links</span> <span class="o">=</span> <span class="nx">isStyleSheet</span><span class="p">(),</span> <span class="c1">// initialize the array holding the sheets urls for use later</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">            <span class="nx">importLinks</span> <span class="o">=</span> <span class="p">[],</span> <span class="c1">//initialize the array holding the import sheet urls for use later</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">            <span class="nx">found</span> <span class="o">=</span> <span class="p">[],</span> <span class="c1">// initialize the array holding the found rules for use later</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">            <span class="nx">foundProps</span> <span class="o">=</span> <span class="p">[],</span> <span class="c1">// initialize the array holding the found properties for use later</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">            <span class="nx">preCSS</span> <span class="o">=</span> <span class="p">[],</span> <span class="c1">// initialize array that holds css before being parsed</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">            <span class="nx">CSSLinks</span> <span class="o">=</span> <span class="p">[],</span> <span class="c1">//initialize array holding css links returned from xhr</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">            <span class="nx">css</span> <span class="o">=</span> <span class="p">[],</span> <span class="c1">// initialize the array holding the parsed rules for use later</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">            <span class="nx">fontSize</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">        <span class="c1">// Notice: rem is a &quot;root em&quot; that means that in case when html element size was changed by css</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">        <span class="c1">// or style we should not change document.documentElement.fontSize to 1em - only body size should be changed</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">        <span class="c1">// to 1em for calculation</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">        <span class="nx">fontSize</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nb">document</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">                <span class="nx">docElement</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">                <span class="nx">body</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">body</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">                <span class="nx">isFakeBody</span> <span class="o">=</span> <span class="o">!</span><span class="nx">doc</span><span class="p">.</span><span class="nx">body</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">                <span class="nx">div</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">                <span class="nx">currentSize</span> <span class="o">=</span> <span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">                <span class="nx">size</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span> <span class="nx">isFakeBody</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">                <span class="nx">docElement</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">body</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">            <span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">cssText</span> <span class="o">=</span> <span class="s1">&#39;width:1em; position:absolute; visibility:hidden; padding: 0;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">            <span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="s1">&#39;1em&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">            <span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span> <span class="nx">div</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">            <span class="nx">size</span> <span class="o">=</span> <span class="nx">div</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span> <span class="nx">isFakeBody</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">                <span class="nx">docElement</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">body</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">            <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">                <span class="nx">body</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span> <span class="nx">div</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">                <span class="nx">body</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">fontSize</span> <span class="o">=</span> <span class="nx">currentSize</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">            <span class="k">return</span> <span class="nx">size</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">        <span class="p">}());</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">        <span class="nx">processLinks</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">    <span class="p">}</span> <span class="c1">// else { do nothing, you are awesome and have REM support }</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line"><span class="p">})(</span><span class="nb">window</span><span class="p">);</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03517s from github-fe125-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2b4202fc62ef88e1a007a9ed05df10607b189f42.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-ecb2c37e1da0ae618e9afbd73a35cc366543c95a.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>


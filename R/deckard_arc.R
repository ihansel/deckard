#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
deckard_arc <- function(data, colours, arc_size, min_arc, map_stype, width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
    message = message
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'deckard_arc',
    x,
    width = width,
    height = height,
    package = 'deckard',
    elementId = elementId
  )
}

#' Shiny bindings for deckard
#'
#' Output and render functions for using deckard within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a deckard
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name deckard-shiny
#'
#' @export
deckard_arcOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'deckard_arc', width, height, package = 'deckard')
}

#' @rdname deckard-shiny
#' @export
renderDeckard_arc <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, deckard_arcOutput, env, quoted = TRUE)
}

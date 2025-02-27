export default {
  '@cloudscape-design/components': {
    'pt-BR': {
      '[charts]': {
        loadingText: [{ type: 0, value: 'Carregando gráfico' }],
        errorText: [{ type: 0, value: 'Não foi possível obter dados. Tente novamente mais tarde.' }],
        recoveryText: [{ type: 0, value: 'Tentar novamente' }],
        'i18nStrings.filterLabel': [{ type: 0, value: 'Filtrar dados exibidos' }],
        'i18nStrings.filterPlaceholder': [{ type: 0, value: 'Filtrar dados' }],
        'i18nStrings.legendAriaLabel': [{ type: 0, value: 'Legenda' }],
        'i18nStrings.xAxisAriaRoleDescription': [{ type: 0, value: 'Eixo x' }],
        'i18nStrings.yAxisAriaRoleDescription': [{ type: 0, value: 'Eixo Y' }],
      },
      alert: { dismissAriaLabel: [{ type: 0, value: 'Descartar alerta' }] },
      'annotation-context': {
        'i18nStrings.nextButtonText': [{ type: 0, value: 'Próxima' }],
        'i18nStrings.previousButtonText': [{ type: 0, value: 'Anterior' }],
        'i18nStrings.finishButtonText': [{ type: 0, value: 'Concluir' }],
        'i18nStrings.labelDismissAnnotation': [{ type: 0, value: 'Descartar anotação' }],
        'i18nStrings.stepCounterText': [
          { type: 0, value: 'Etapa ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'totalStepCount' },
        ],
        'i18nStrings.taskTitle': [
          { type: 0, value: 'Tarefa ' },
          { type: 1, value: 'taskNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'taskTitle' },
        ],
        'i18nStrings.labelHotspot': [
          {
            type: 5,
            value: 'openState',
            options: {
              true: {
                value: [
                  { type: 0, value: 'Fechar anotação para a etapa ' },
                  { type: 1, value: 'stepNumber' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'totalStepCount' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'Abrir anotação para a etapa ' },
                  { type: 1, value: 'stepNumber' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'totalStepCount' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'app-layout': {
        'ariaLabels.navigation': [{ type: 0, value: 'Navegação lateral' }],
        'ariaLabels.navigationClose': [{ type: 0, value: 'Fechar navegação lateral' }],
        'ariaLabels.navigationToggle': [{ type: 0, value: 'Abrir navegação lateral' }],
        'ariaLabels.notifications': [{ type: 0, value: 'Notificações' }],
        'ariaLabels.tools': [{ type: 0, value: 'Painel de ajuda' }],
        'ariaLabels.toolsClose': [{ type: 0, value: 'Fechar o painel de ajuda' }],
        'ariaLabels.toolsToggle': [{ type: 0, value: 'Abrir o painel de ajuda' }],
      },
      'area-chart': { 'i18nStrings.detailTotalLabel': [{ type: 0, value: 'Total' }] },
      'attribute-editor': { removeButtonText: [{ type: 0, value: 'Remover' }] },
      autosuggest: {
        errorIconAriaLabel: [{ type: 0, value: 'Erro' }],
        selectedAriaLabel: [{ type: 0, value: 'Selecionado' }],
        enteredTextLabel: [
          { type: 0, value: 'Usar: “' },
          { type: 1, value: 'value' },
          { type: 0, value: '”' },
        ],
        recoveryText: [{ type: 0, value: 'Tentar novamente' }],
      },
      'breadcrumb-group': { expandAriaLabel: [{ type: 0, value: 'Mostrar caminho' }] },
      calendar: {
        nextMonthAriaLabel: [{ type: 0, value: 'Próximo mês' }],
        previousMonthAriaLabel: [{ type: 0, value: 'Mês anterior' }],
        todayAriaLabel: [{ type: 0, value: 'Hoje' }],
      },
      cards: { 'ariaLabels.selectionGroupLabel': [{ type: 0, value: 'Seleção de item' }] },
      'code-editor': {
        'i18nStrings.loadingState': [{ type: 0, value: 'Carregando editor de código' }],
        'i18nStrings.errorState': [{ type: 0, value: 'Ocorreu um erro ao carregar o editor de código.' }],
        'i18nStrings.errorStateRecovery': [{ type: 0, value: 'Tentar novamente' }],
        'i18nStrings.editorGroupAriaLabel': [{ type: 0, value: 'Editor de código' }],
        'i18nStrings.statusBarGroupAriaLabel': [{ type: 0, value: 'Barra de status' }],
        'i18nStrings.cursorPosition': [
          { type: 0, value: 'Ln ' },
          { type: 1, value: 'row' },
          { type: 0, value: ', Col ' },
          { type: 1, value: 'column' },
        ],
        'i18nStrings.errorsTab': [{ type: 0, value: 'Erros' }],
        'i18nStrings.warningsTab': [{ type: 0, value: 'Avisos' }],
        'i18nStrings.preferencesButtonAriaLabel': [{ type: 0, value: 'Preferências' }],
        'i18nStrings.paneCloseButtonAriaLabel': [{ type: 0, value: 'Fechar' }],
        'i18nStrings.preferencesModalHeader': [{ type: 0, value: 'Preferências' }],
        'i18nStrings.preferencesModalCancel': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.preferencesModalConfirm': [{ type: 0, value: 'Confirmar' }],
        'i18nStrings.preferencesModalWrapLines': [{ type: 0, value: 'Quebrar linhas' }],
        'i18nStrings.preferencesModalTheme': [{ type: 0, value: 'Tema' }],
        'i18nStrings.preferencesModalLightThemes': [{ type: 0, value: 'Temas claros' }],
        'i18nStrings.preferencesModalDarkThemes': [{ type: 0, value: 'Temas escuros' }],
      },
      'collection-preferences': {
        title: [{ type: 0, value: 'Preferências' }],
        confirmLabel: [{ type: 0, value: 'Confirmar' }],
        cancelLabel: [{ type: 0, value: 'Cancelar' }],
        'pageSizePreference.title': [{ type: 0, value: 'Tamanho da página' }],
        'wrapLinesPreference.label': [{ type: 0, value: 'Quebrar linhas' }],
        'wrapLinesPreference.description': [
          { type: 0, value: 'Selecione para visualizar todo o texto e quebrar as linhas.' },
        ],
        'stripedRowsPreference.label': [{ type: 0, value: 'Linhas distribuídas' }],
        'stripedRowsPreference.description': [
          { type: 0, value: 'Selecione para adicionar linhas esmaecidas alternadas.' },
        ],
        'contentDensityPreference.label': [{ type: 0, value: 'Modo compacto' }],
        'contentDensityPreference.description': [
          { type: 0, value: 'Selecione para exibir o conteúdo em um modo mais denso e compacto.' },
        ],
        'contentDisplayPreference.title': [{ type: 0, value: 'Preferências de coluna' }],
        'contentDisplayPreference.description': [
          { type: 0, value: 'Personalize a visibilidade e a ordem das colunas.' },
        ],
        'contentDisplayPreference.dragHandleAriaLabel': [{ type: 0, value: 'Ícone de arrastar' }],
        'contentDisplayPreference.dragHandleAriaDescription': [
          {
            type: 0,
            value:
              'Use Space ou Enter para ativar a função de arrastar para um item e, em seguida, use as teclas de setas para movimentar o posicionamento do item. Para completar o movimento de posicionamento, use Space ou Enter, ou para descartar o movimento, use Escape.',
          },
        ],
        'contentDisplayPreference.liveAnnouncementDndStarted': [
          { type: 0, value: 'Item selecionado na posição ' },
          { type: 1, value: 'position' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'total' },
        ],
        'contentDisplayPreference.liveAnnouncementDndDiscarded': [{ type: 0, value: 'Reordenação cancelada' }],
        'contentDisplayPreference.liveAnnouncementDndItemReordered': [
          {
            type: 5,
            value: 'isInitialPosition',
            options: {
              true: {
                value: [
                  { type: 0, value: 'Movendo o item de volta para a posição ' },
                  { type: 1, value: 'currentPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'Movendo o item para a posição ' },
                  { type: 1, value: 'currentPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
        'contentDisplayPreference.liveAnnouncementDndItemCommitted': [
          {
            type: 5,
            value: 'isInitialPosition',
            options: {
              true: {
                value: [
                  { type: 0, value: 'Item movido de volta à sua posição original ' },
                  { type: 1, value: 'initialPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              false: {
                value: [
                  { type: 0, value: 'Item movido da posição ' },
                  { type: 1, value: 'initialPosition' },
                  { type: 0, value: ' para a posição ' },
                  { type: 1, value: 'finalPosition' },
                  { type: 0, value: ' de ' },
                  { type: 1, value: 'total' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'date-range-picker': {
        'i18nStrings.relativeModeTitle': [{ type: 0, value: 'Modo relativo' }],
        'i18nStrings.absoluteModeTitle': [{ type: 0, value: 'Modo absoluto' }],
        'i18nStrings.relativeRangeSelectionHeading': [{ type: 0, value: 'Escolher um intervalo' }],
        'i18nStrings.cancelButtonLabel': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.clearButtonLabel': [{ type: 0, value: 'Limpar e descartar' }],
        'i18nStrings.applyButtonLabel': [{ type: 0, value: 'Aplicar' }],
        'i18nStrings.customRelativeRangeOptionLabel': [{ type: 0, value: 'Intervalo personalizado' }],
        'i18nStrings.customRelativeRangeOptionDescription': [
          { type: 0, value: 'Defina um intervalo personalizado no passado' },
        ],
        'i18nStrings.customRelativeRangeUnitLabel': [{ type: 0, value: 'Unidade de tempo' }],
        'i18nStrings.customRelativeRangeDurationLabel': [{ type: 0, value: 'Duração' }],
        'i18nStrings.customRelativeRangeDurationPlaceholder': [{ type: 0, value: 'Inserir uma duração' }],
        'i18nStrings.startDateLabel': [{ type: 0, value: 'Data de início' }],
        'i18nStrings.startTimeLabel': [{ type: 0, value: 'Horário de início' }],
        'i18nStrings.endDateLabel': [{ type: 0, value: 'Data de término' }],
        'i18nStrings.endTimeLabel': [{ type: 0, value: 'Horário de término' }],
        'i18nStrings.dateTimeConstraintText': [
          { type: 0, value: 'Para a data, use o formato AAAA/MM/DD. Para o horário, use o formato de 24 horas.' },
        ],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erro' }],
        'i18nStrings.renderSelectedAbsoluteRangeAriaLive': [
          { type: 0, value: 'Intervalo selecionado de ' },
          { type: 1, value: 'startDate' },
          { type: 0, value: ' a ' },
          { type: 1, value: 'endDate' },
        ],
        'i18nStrings.formatRelativeRange': [
          {
            type: 6,
            value: 'amount',
            options: {
              one: {
                value: [
                  { type: 0, value: 'Último(a) ' },
                  { type: 1, value: 'amount' },
                  { type: 0, value: ' ' },
                  { type: 1, value: 'unit' },
                ],
              },
              other: {
                value: [
                  { type: 0, value: 'Últimos(as) ' },
                  { type: 1, value: 'amount' },
                  { type: 0, value: ' ' },
                  { type: 1, value: 'unit' },
                  { type: 0, value: 's' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.formatUnit': [
          {
            type: 6,
            value: 'amount',
            options: {
              one: { value: [{ type: 1, value: 'unit' }] },
              other: {
                value: [
                  { type: 1, value: 'unit' },
                  { type: 0, value: 's' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
      },
      flashbar: {
        'i18nStrings.ariaLabel': [{ type: 0, value: 'Notificações' }],
        'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erro' }],
        'i18nStrings.inProgressIconAriaLabel': [{ type: 0, value: 'Em andamento' }],
        'i18nStrings.infoIconAriaLabel': [{ type: 0, value: 'Informações' }],
        'i18nStrings.notificationBarAriaLabel': [{ type: 0, value: 'Todas as notificações' }],
        'i18nStrings.notificationBarText': [{ type: 0, value: 'Notificações' }],
        'i18nStrings.successIconAriaLabel': [{ type: 0, value: 'Êxito' }],
        'i18nStrings.warningIconAriaLabel': [{ type: 0, value: 'Aviso' }],
      },
      'form-field': { 'i18nStrings.errorIconAriaLabel': [{ type: 0, value: 'Erro' }] },
      form: { errorIconAriaLabel: [{ type: 0, value: 'Erro' }] },
      'help-panel': { loadingText: [{ type: 0, value: 'Carregando conteúdo' }] },
      input: { clearAriaLabel: [{ type: 0, value: 'Limpar' }] },
      link: { externalIconAriaLabel: [{ type: 0, value: 'Abre em uma nova guia' }] },
      modal: { closeAriaLabel: [{ type: 0, value: 'Fechar modal' }] },
      multiselect: {
        deselectAriaLabel: [
          { type: 0, value: 'Remover ' },
          { type: 1, value: 'option__label' },
        ],
      },
      pagination: {
        'ariaLabels.nextPageLabel': [{ type: 0, value: 'Próxima página' }],
        'ariaLabels.pageLabel': [
          { type: 0, value: 'Página ' },
          { type: 1, value: 'pageNumber' },
          { type: 0, value: ' de todas as páginas' },
        ],
        'ariaLabels.previousPageLabel': [{ type: 0, value: 'Página anterior' }],
      },
      'pie-chart': {
        'i18nStrings.detailsValue': [{ type: 0, value: 'Valor' }],
        'i18nStrings.detailsPercentage': [{ type: 0, value: 'Porcentagem' }],
        'i18nStrings.chartAriaRoleDescription': [{ type: 0, value: 'Gráfico de pizza' }],
        'i18nStrings.segmentAriaRoleDescription': [{ type: 0, value: 'Segmento' }],
      },
      popover: { dismissAriaLabel: [{ type: 0, value: 'Fechar pop-over' }] },
      'property-filter': {
        'i18nStrings.allPropertiesLabel': [{ type: 0, value: 'Todas as propriedades' }],
        'i18nStrings.applyActionText': [{ type: 0, value: 'Aplicar' }],
        'i18nStrings.cancelActionText': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.clearFiltersText': [{ type: 0, value: 'Limpar filtros' }],
        'i18nStrings.editTokenHeader': [{ type: 0, value: 'Editar filtro' }],
        'i18nStrings.groupPropertiesText': [{ type: 0, value: 'Propriedades' }],
        'i18nStrings.groupValuesText': [{ type: 0, value: 'Valores' }],
        'i18nStrings.operationAndText': [{ type: 0, value: 'e' }],
        'i18nStrings.operationOrText': [{ type: 0, value: 'ou' }],
        'i18nStrings.operatorContainsText': [{ type: 0, value: 'Contém' }],
        'i18nStrings.operatorDoesNotContainText': [{ type: 0, value: 'Não contém' }],
        'i18nStrings.operatorDoesNotEqualText': [{ type: 0, value: 'Diferente de' }],
        'i18nStrings.operatorEqualsText': [{ type: 0, value: 'Igual a' }],
        'i18nStrings.operatorGreaterOrEqualText': [{ type: 0, value: 'Maior que ou igual a' }],
        'i18nStrings.operatorGreaterText': [{ type: 0, value: 'Maior que' }],
        'i18nStrings.operatorLessOrEqualText': [{ type: 0, value: 'Menor que ou igual a' }],
        'i18nStrings.operatorLessText': [{ type: 0, value: 'Menor que' }],
        'i18nStrings.operatorText': [{ type: 0, value: 'Operador' }],
        'i18nStrings.operatorsText': [{ type: 0, value: 'Operadores' }],
        'i18nStrings.propertyText': [{ type: 0, value: 'Propriedade' }],
        'i18nStrings.tokenLimitShowFewer': [{ type: 0, value: 'Mostrar menos' }],
        'i18nStrings.tokenLimitShowMore': [{ type: 0, value: 'Mostrar mais' }],
        'i18nStrings.valueText': [{ type: 0, value: 'Valor' }],
        'i18nStrings.removeTokenButtonAriaLabel': [
          {
            type: 5,
            value: 'token__operator',
            options: {
              equals: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_equals: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' diferente de ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é maior que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              greater_than_equal: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é maior que ou igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é menor que ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              less_than_equal: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' é menor que ou igual a ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              contains: {
                value: [
                  { type: 0, value: 'Remove filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' contém ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              not_contains: {
                value: [
                  { type: 0, value: 'Remover filtro, ' },
                  { type: 1, value: 'token__propertyKey' },
                  { type: 0, value: ' não contém ' },
                  { type: 1, value: 'token__value' },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      's3-resource-selector': {
        'i18nStrings.inContextSelectPlaceholder': [{ type: 0, value: 'Escolher uma versão' }],
        'i18nStrings.inContextBrowseButton': [{ type: 0, value: 'Navegar pelo S3' }],
        'i18nStrings.inContextViewButton': [{ type: 0, value: 'Visualizar' }],
        'i18nStrings.inContextViewButtonAriaLabel': [{ type: 0, value: 'Visualizar (abre em uma nova guia)' }],
        'i18nStrings.inContextLoadingText': [{ type: 0, value: 'Carregando recurso' }],
        'i18nStrings.inContextUriLabel': [{ type: 0, value: 'URI do S3' }],
        'i18nStrings.inContextVersionSelectLabel': [{ type: 0, value: 'Versão do objeto' }],
        'i18nStrings.modalTitle': [{ type: 0, value: 'Escolher um arquivo no S3' }],
        'i18nStrings.modalCancelButton': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.modalSubmitButton': [{ type: 0, value: 'Escolher' }],
        'i18nStrings.modalBreadcrumbRootItem': [{ type: 0, value: 'Buckets do S3' }],
        'i18nStrings.selectionBuckets': [{ type: 0, value: 'Buckets' }],
        'i18nStrings.selectionObjects': [{ type: 0, value: 'Objetos' }],
        'i18nStrings.selectionVersions': [{ type: 0, value: 'Versões' }],
        'i18nStrings.selectionBucketsSearchPlaceholder': [{ type: 0, value: 'Encontrar bucket' }],
        'i18nStrings.selectionObjectsSearchPlaceholder': [{ type: 0, value: 'Encontrar objeto por prefixo' }],
        'i18nStrings.selectionVersionsSearchPlaceholder': [{ type: 0, value: 'Encontrar versão' }],
        'i18nStrings.selectionBucketsLoading': [{ type: 0, value: 'Carregando buckets' }],
        'i18nStrings.selectionBucketsNoItems': [{ type: 0, value: 'Não há buckets' }],
        'i18nStrings.selectionObjectsLoading': [{ type: 0, value: 'Carregando objetos' }],
        'i18nStrings.selectionObjectsNoItems': [{ type: 0, value: 'Não há objetos' }],
        'i18nStrings.selectionVersionsLoading': [{ type: 0, value: 'Carregando versões' }],
        'i18nStrings.selectionVersionsNoItems': [{ type: 0, value: 'Não há versões' }],
        'i18nStrings.filteringNoMatches': [{ type: 0, value: 'Não há correspondências' }],
        'i18nStrings.filteringCantFindMatch': [{ type: 0, value: 'Não conseguimos encontrar uma correspondência.' }],
        'i18nStrings.clearFilterButtonText': [{ type: 0, value: 'Limpar filtro' }],
        'i18nStrings.columnBucketID': [{ type: 0, value: 'ID' }],
        'i18nStrings.columnBucketName': [{ type: 0, value: 'Nome' }],
        'i18nStrings.columnBucketCreationDate': [{ type: 0, value: 'Data de criação' }],
        'i18nStrings.columnBucketRegion': [{ type: 0, value: 'Região' }],
        'i18nStrings.columnObjectKey': [{ type: 0, value: 'Chave' }],
        'i18nStrings.columnObjectLastModified': [{ type: 0, value: 'Última modificação' }],
        'i18nStrings.columnObjectSize': [{ type: 0, value: 'Tamanho' }],
        'i18nStrings.columnVersionID': [{ type: 0, value: 'ID da versão' }],
        'i18nStrings.columnVersionLastModified': [{ type: 0, value: 'Última modificação' }],
        'i18nStrings.columnVersionSize': [{ type: 0, value: 'Tamanho' }],
        'i18nStrings.validationPathMustBegin': [{ type: 0, value: 'O caminho precisa começar com s3://' }],
        'i18nStrings.validationBucketLowerCase': [
          { type: 0, value: 'O nome do bucket deve começar com um caractere minúsculo ou com um número.' },
        ],
        'i18nStrings.validationBucketMustNotContain': [
          { type: 0, value: 'O nome do bucket não deve conter caracteres maiúsculos.' },
        ],
        'i18nStrings.validationBucketLength': [{ type: 0, value: 'O nome do bucket deve ter de 3 a 63 caracteres.' }],
        'i18nStrings.validationBucketMustComplyDns': [
          { type: 0, value: 'O nome do bucket deve estar em conformidade com as convenções de nomenclatura de DNS.' },
        ],
        'i18nStrings.labelSortedDescending': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', classificada em ordem decrescente' },
        ],
        'i18nStrings.labelSortedAscending': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', classificada em ordem crescente' },
        ],
        'i18nStrings.labelNotSorted': [
          { type: 1, value: 'columnName' },
          { type: 0, value: ', não classificada' },
        ],
        'i18nStrings.labelsBucketsSelection.selectionGroupLabel': [{ type: 0, value: 'Buckets' }],
        'i18nStrings.labelsBucketsSelection.itemSelectionLabel': [{ type: 1, value: 'item__Name' }],
        'i18nStrings.labelsObjectsSelection.selectionGroupLabel': [{ type: 0, value: 'Objetos' }],
        'i18nStrings.labelsObjectsSelection.itemSelectionLabel': [{ type: 1, value: 'item__Key' }],
        'i18nStrings.labelsVersionsSelection.selectionGroupLabel': [{ type: 0, value: 'Versões' }],
        'i18nStrings.labelsVersionsSelection.itemSelectionLabel': [{ type: 1, value: 'item__VersionId' }],
        'i18nStrings.labelFiltering': [
          { type: 0, value: 'Encontrar ' },
          { type: 1, value: 'itemsType' },
        ],
        'i18nStrings.labelRefresh': [{ type: 0, value: 'Atualizar os dados' }],
        'i18nStrings.labelBreadcrumbs': [{ type: 0, value: 'Navegação no S3' }],
        'i18nStrings.filteringCounterText': [
          {
            type: 6,
            value: 'count',
            options: {
              one: { value: [{ type: 0, value: 'Uma correspondência' }] },
              other: {
                value: [
                  { type: 1, value: 'count' },
                  { type: 0, value: ' correspondências' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
      },
      select: {
        errorIconAriaLabel: [{ type: 0, value: 'Erro' }],
        selectedAriaLabel: [{ type: 0, value: 'Selecionado' }],
        recoveryText: [{ type: 0, value: 'Tentar novamente' }],
      },
      'split-panel': {
        'i18nStrings.closeButtonAriaLabel': [{ type: 0, value: 'Fechar painel' }],
        'i18nStrings.openButtonAriaLabel': [{ type: 0, value: 'Abrir painel' }],
        'i18nStrings.preferencesTitle': [{ type: 0, value: 'Preferências de divisão de painel' }],
        'i18nStrings.preferencesPositionLabel': [{ type: 0, value: 'Posição de divisão de painel' }],
        'i18nStrings.preferencesPositionDescription': [
          { type: 0, value: 'Escolha a posição padrão de divisão de painel para o serviço.' },
        ],
        'i18nStrings.preferencesPositionSide': [{ type: 0, value: 'Lateral' }],
        'i18nStrings.preferencesPositionBottom': [{ type: 0, value: 'Inferior' }],
        'i18nStrings.preferencesConfirm': [{ type: 0, value: 'Confirmar' }],
        'i18nStrings.preferencesCancel': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.resizeHandleAriaLabel': [{ type: 0, value: 'Redimensionar painel dividido' }],
      },
      table: {
        'ariaLabels.submittingEditText': [{ type: 0, value: 'Envio de edição' }],
        'ariaLabels.successfulEditLabel': [{ type: 0, value: 'A edição foi bem sucedida' }],
        'columnDefinitions.editConfig.errorIconAriaLabel': [{ type: 0, value: 'Erro' }],
        'columnDefinitions.editConfig.editIconAriaLabel': [{ type: 0, value: 'editável' }],
      },
      tabs: {
        'i18nStrings.scrollLeftAriaLabel': [{ type: 0, value: 'Rolar para a esquerda' }],
        'i18nStrings.scrollRightAriaLabel': [{ type: 0, value: 'Rolar para a direita' }],
      },
      'tag-editor': {
        'i18nStrings.keyPlaceholder': [{ type: 0, value: 'Inserir chave' }],
        'i18nStrings.valuePlaceholder': [{ type: 0, value: 'Inserir valor' }],
        'i18nStrings.addButton': [{ type: 0, value: 'Adicionar nova tag' }],
        'i18nStrings.removeButton': [{ type: 0, value: 'Remover' }],
        'i18nStrings.removeButtonAriaLabel': [
          { type: 0, value: 'Remover ' },
          { type: 1, value: 'tag__key' },
        ],
        'i18nStrings.undoButton': [{ type: 0, value: 'Desfazer' }],
        'i18nStrings.undoPrompt': [{ type: 0, value: 'Essa tag será removida depois que as alterações forem salvas' }],
        'i18nStrings.loading': [{ type: 0, value: 'Carregando tags associadas a este recurso' }],
        'i18nStrings.keyHeader': [{ type: 0, value: 'Chave' }],
        'i18nStrings.valueHeader': [{ type: 0, value: 'Valor' }],
        'i18nStrings.optional': [{ type: 0, value: 'opcional' }],
        'i18nStrings.keySuggestion': [{ type: 0, value: 'Chave de tag personalizada' }],
        'i18nStrings.valueSuggestion': [{ type: 0, value: 'Valor de tag personalizado' }],
        'i18nStrings.emptyTags': [{ type: 0, value: 'Nenhuma tag associada ao recurso.' }],
        'i18nStrings.tooManyKeysSuggestion': [{ type: 0, value: 'Você tem mais chaves do que é possível exibir' }],
        'i18nStrings.tooManyValuesSuggestion': [{ type: 0, value: 'Você tem mais valores do que é possível exibir' }],
        'i18nStrings.keysSuggestionLoading': [{ type: 0, value: 'Carregando chaves de tag' }],
        'i18nStrings.keysSuggestionError': [{ type: 0, value: 'Não foi possível recuperar chaves de tag' }],
        'i18nStrings.valuesSuggestionLoading': [{ type: 0, value: 'Carregando valores de tag' }],
        'i18nStrings.valuesSuggestionError': [{ type: 0, value: 'Não foi possível recuperar valores de tag' }],
        'i18nStrings.emptyKeyError': [{ type: 0, value: 'Você deve especificar uma chave de tag' }],
        'i18nStrings.maxKeyCharLengthError': [
          { type: 0, value: 'O número máximo de caracteres que você pode usar em uma chave de tag é 128.' },
        ],
        'i18nStrings.maxValueCharLengthError': [
          { type: 0, value: 'O número máximo de caracteres que você pode usar em um valor de tag é 256.' },
        ],
        'i18nStrings.duplicateKeyError': [{ type: 0, value: 'Você deve especificar uma chave de tag exclusiva.' }],
        'i18nStrings.invalidKeyError': [
          {
            type: 0,
            value:
              'Chave inválida. As chaves só podem conter letras Unicode, dígitos, espaço em branco e os seguintes caracteres: _.:/=+@-',
          },
        ],
        'i18nStrings.invalidValueError': [
          {
            type: 0,
            value:
              'Valor inválido. Os valores só podem conter letras Unicode, dígitos, espaço em branco e os seguintes caracteres: _.:/=+@-',
          },
        ],
        'i18nStrings.awsPrefixError': [{ type: 0, value: 'Não foi possível começar com a AWS:' }],
        'i18nStrings.tagLimitReached': [
          {
            type: 6,
            value: 'tagLimit',
            options: {
              one: { value: [{ type: 0, value: 'Você atingiu o limite de 1 tag.' }] },
              other: {
                value: [
                  { type: 0, value: 'Você atingiu o limite de ' },
                  { type: 1, value: 'tagLimit' },
                  { type: 0, value: ' tags.' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.tagLimitExceeded': [
          {
            type: 6,
            value: 'tagLimit',
            options: {
              one: { value: [{ type: 0, value: 'Você excedeu o limite de 1 tag.' }] },
              other: {
                value: [
                  { type: 0, value: 'Você excedeu o limite de ' },
                  { type: 1, value: 'tagLimit' },
                  { type: 0, value: ' tags.' },
                ],
              },
            },
            offset: 0,
            pluralType: 'cardinal',
          },
        ],
        'i18nStrings.tagLimit': [
          {
            type: 5,
            value: 'tagLimitAvailable',
            options: {
              true: {
                value: [
                  {
                    type: 6,
                    value: 'availableTags',
                    options: {
                      other: {
                        value: [
                          { type: 0, value: 'Você pode adicionar até ' },
                          { type: 1, value: 'tagLimit' },
                          { type: 0, value: ' tags.' },
                        ],
                      },
                    },
                    offset: 0,
                    pluralType: 'cardinal',
                  },
                ],
              },
              false: {
                value: [
                  {
                    type: 6,
                    value: 'availableTags',
                    options: {
                      one: { value: [{ type: 0, value: 'Você pode adicionar mais 1 tag.' }] },
                      other: {
                        value: [
                          { type: 0, value: 'Você pode adicionar mais ' },
                          { type: 1, value: 'availableTags' },
                          { type: 0, value: ' tags.' },
                        ],
                      },
                    },
                    offset: 0,
                    pluralType: 'cardinal',
                  },
                ],
              },
              other: { value: [] },
            },
          },
        ],
      },
      'token-group': {
        'i18nStrings.limitShowFewer': [{ type: 0, value: 'Mostrar menos' }],
        'i18nStrings.limitShowMore': [{ type: 0, value: 'Mostrar mais' }],
      },
      'top-navigation': {
        'i18nStrings.searchIconAriaLabel': [{ type: 0, value: 'Pesquisar' }],
        'i18nStrings.searchDismissIconAriaLabel': [{ type: 0, value: 'Fechar pesquisa' }],
        'i18nStrings.overflowMenuTriggerText': [{ type: 0, value: 'Mais' }],
        'i18nStrings.overflowMenuDismissIconAriaLabel': [{ type: 0, value: 'Fechar menu' }],
        'i18nStrings.overflowMenuBackIconAriaLabel': [{ type: 0, value: 'Voltar' }],
        'i18nStrings.overflowMenuTitleText': [{ type: 0, value: 'Todos' }],
      },
      'tutorial-panel': {
        'i18nStrings.loadingText': [{ type: 0, value: 'Carregando' }],
        'i18nStrings.tutorialListTitle': [{ type: 0, value: 'Escolha um tutorial' }],
        'i18nStrings.tutorialListDownloadLinkText': [{ type: 0, value: 'Baixar a versão em PDF' }],
        'i18nStrings.labelTutorialListDownloadLink': [{ type: 0, value: 'Baixar a versão em PDF deste tutorial' }],
        'i18nStrings.tutorialCompletedText': [{ type: 0, value: 'Tutorial concluído' }],
        'i18nStrings.learnMoreLinkText': [{ type: 0, value: 'Saiba mais' }],
        'i18nStrings.startTutorialButtonText': [{ type: 0, value: 'Iniciar o tutorial' }],
        'i18nStrings.restartTutorialButtonText': [{ type: 0, value: 'Reiniciar tutorial' }],
        'i18nStrings.completionScreenTitle': [{ type: 0, value: 'Parabéns! Você concluiu o tutorial.' }],
        'i18nStrings.feedbackLinkText': [{ type: 0, value: 'Feedback' }],
        'i18nStrings.dismissTutorialButtonText': [{ type: 0, value: 'Ignorar tutorial' }],
        'i18nStrings.taskTitle': [
          { type: 0, value: 'Tarefa ' },
          { type: 1, value: 'taskNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'taskTitle' },
        ],
        'i18nStrings.stepTitle': [
          { type: 0, value: 'Etapa ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ': ' },
          { type: 1, value: 'stepTitle' },
        ],
        'i18nStrings.labelExitTutorial': [{ type: 0, value: 'Ignorar tutorial' }],
        'i18nStrings.labelTotalSteps': [
          { type: 0, value: 'Total de etapas: ' },
          { type: 1, value: 'totalStepCount' },
        ],
        'i18nStrings.labelsTaskStatus.pending': [{ type: 0, value: 'Pendente' }],
        'i18nStrings.labelsTaskStatus.in-progress': [{ type: 0, value: 'Em andamento' }],
        'i18nStrings.labelsTaskStatus.success': [{ type: 0, value: 'Êxito' }],
      },
      wizard: {
        'i18nStrings.stepNumberLabel': [
          { type: 0, value: 'Etapa ' },
          { type: 1, value: 'stepNumber' },
        ],
        'i18nStrings.collapsedStepsLabel': [
          { type: 0, value: 'Etapa ' },
          { type: 1, value: 'stepNumber' },
          { type: 0, value: ' de ' },
          { type: 1, value: 'stepsCount' },
        ],
        'i18nStrings.skipToButtonLabel': [
          { type: 0, value: 'Pular para ' },
          { type: 1, value: 'task__title' },
        ],
        'i18nStrings.navigationAriaLabel': [{ type: 0, value: 'Etapas' }],
        'i18nStrings.cancelButton': [{ type: 0, value: 'Cancelar' }],
        'i18nStrings.previousButton': [{ type: 0, value: 'Anterior' }],
        'i18nStrings.nextButton': [{ type: 0, value: 'Próxima' }],
        'i18nStrings.optional': [{ type: 0, value: 'opcional' }],
        'i18nStrings.nextButtonLoadingAnnouncement': [{ type: 0, value: 'Carregando próxima etapa' }],
        'i18nStrings.submitButtonLoadingAnnouncement': [{ type: 0, value: 'Enviando formulário' }],
      },
    },
  },
};

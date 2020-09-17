/* global AutoForm */

Template['quickForm_bs-inline-new'].helpers({
  submitButtonAtts: function () {
    var qfAtts = this.atts;
    var atts = {};
    if (typeof qfAtts.buttonClasses === 'string') {
      atts['class'] = qfAtts.buttonClasses;
    } else {
      atts['class'] = 'btn btn-primary autoform-inline-align';
    }
    return atts;
  },
  qfAutoFormContext: function () {
    var ctx = _.clone(this.qfAutoFormContext || {});
    ctx = AutoForm.Utility.addClass(ctx, 'form-inline');

    // label-class attribute is unique to this template so it will
    // not have been removed by AutoForm core. We remove it from the autoForm context
    // because it is an attribute supported only by quickFields, quickField,
    // afObjectField, afArrayField, and afFormGroup.
    delete ctx['label-class'];

    return ctx;
  },
  quickFieldsAtts: function () {
    // These are the quickForm attributes that we want to forward to
    // the afQuickFields component.
    return _.pick(this.atts, 'id-prefix', 'label-class');
  }
});

Template['afFormGroup_bs-inline-new'].helpers({
  afFieldInputAtts: function () {
    var atts = _.clone(this.afFieldInputAtts || {});
    // Use the same templates as those defined for bootstrap3 template.
    atts.template = 'bootstrap3';
    return atts;
  }
});
/*****************************************************************************/
/* QuickFormBsInlineNew: Event Handlers */
/*****************************************************************************/
Template.QuickFormBsInlineNew.events({
});

/*****************************************************************************/
/* QuickFormBsInlineNew: Helpers */
/*****************************************************************************/
Template.QuickFormBsInlineNew.helpers({
});

/*****************************************************************************/
/* QuickFormBsInlineNew: Lifecycle Hooks */
/*****************************************************************************/
Template.QuickFormBsInlineNew.onCreated(function () {
});

Template.QuickFormBsInlineNew.onRendered(function () {
});

Template.QuickFormBsInlineNew.onDestroyed(function () {
});
